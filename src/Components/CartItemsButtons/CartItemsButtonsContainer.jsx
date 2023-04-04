import { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";
import CartItemsButtons from "./CartItemsButtons";

const CartItemsButtonsContainer = ({ item }) => {
    const { addCart, deteleItemById } = useContext(CartContext);

    const add = () => {
        if (item.quantity < item.stock) {
            item.quantity += 1;
            addCart(item);
            changeItem(`Se aumento la cantidad de: ${item.title}`);
        }
    };

    const sub = () => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            addCart(item);
            changeItem(`Se disminuyo la cantidad de: ${item.title}`);
        }
    };

    const deleteItem = () => {
        deteleItemById(item.id);
        changeItem(`Producto eliminado: ${item.title}`);
    };

    const changeItem = (title) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background: "#181e1a",
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: "success",
            title: title,
        });
    };

    return <CartItemsButtons add={add} sub={sub} deleteItem={deleteItem} item={item} />;
};

export default CartItemsButtonsContainer;
