import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Grid } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
    const { categoryName } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsCollection = collection(db, "items");

        let consulta = undefined;

        if (categoryName) {
            const q = query(itemsCollection, where("category", "==", categoryName));
            consulta = getDocs(q);
        } else {
            consulta = getDocs(itemsCollection);
        }

        consulta.then((res) => {
            let products = res.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id,
                };
            });

            setItems(products);
        });
    }, [categoryName]);

    if (items.length === 0) {
        return <Loader />;
    }
    return (
        <Grid margin={3}>
            <ItemList items={items} />
        </Grid>
    );
};

export default ItemListContainer;
