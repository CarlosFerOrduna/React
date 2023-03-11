import { useParams } from "react-router-dom";
import { products } from "../itemsMock";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const { addCart } = useContext(CartContext);

    const itemSelected = products.find((e) => e.id === Number(id));

    const onAdd = (quantity) => {
        let item = {
            ...itemSelected,
            quantity,
        };

        addCart(item);
    };

    return <ItemDetail onAdd={onAdd} item={itemSelected} />;
};

export default ItemDetailContainer;
