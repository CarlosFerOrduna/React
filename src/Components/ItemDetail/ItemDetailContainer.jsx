import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const { addCart, getQuantityById } = useContext(CartContext);

    const [ItemSelected, setItemSelected] = useState({});

    useEffect(() => {
        const itemCollection = collection(db, "items");

        const ref = doc(itemCollection, id);

        getDoc(ref).then((res) => {
            setItemSelected({
                ...res.data(),
                id: res.id,
            });
        });
    }, [id]);

    const onAdd = (quantity) => {
        let item = {
            ...ItemSelected,
            quantity,
        };

        addCart(item);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto agregado exitosamente",
            showConfirmButton: false,
            background: "#181e1a",
            color: "#ffe001",
            timer: 1500,
        });
    };

    let quantity = getQuantityById(Number(id));

    return <ItemDetail onAdd={onAdd} item={ItemSelected} quantity={quantity} />;
};

export default ItemDetailContainer;
