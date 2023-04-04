import Swal from "sweetalert2";
import CartOptions from "./CartOptions";

const CartOptionsContainer = ({ clearCart, setFinished }) => {
    const vaciarCart = () => {
        Swal.fire({
            title: "Seguro de borra el contenido del carrito?",
            text: "Se perdera lo toda su compra",
            icon: "warning",
            background: "#181e1a",
            showCancelButton: true,
            confirmButtonText: "Si, borrar!",
            confirmButtonColor: "#ffe001",
            cancelButtonText: "No, cancelar!",
            cancelButtonColor: "#e42314",
            reverseButtons: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Borrado!",
                    text: "Se elimino el contenido de su carrito.",
                    icon: "success",
                    background: "#181e1a",
                    confirmButtonColor: "#e42314",
                });
                clearCart();
            } else {
                Swal.fire({
                    title: "Cancelado!",
                    text: "No se modifico el contenido de su carrito.",
                    icon: "error",
                    background: "#181e1a",
                    confirmButtonColor: "#e42314",
                });
            }
        });
    };

    const terminarCompra = () => {
        Swal.fire({
            title: "Seguro que desea terminar la compra?",
            text: "Se finalizara y no podra agregar mas productos",
            icon: "warning",
            background: "#181e1a",
            showCancelButton: true,
            confirmButtonText: "Si, terminar!",
            confirmButtonColor: "#ffe001",
            cancelButtonText: "No, cancelar!",
            cancelButtonColor: "#e42314",
            reverseButtons: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra finalizada!",
                    text: "Siguiente va a aparecer el formulario para crear la orden de compra.",
                    icon: "success",
                    background: "#181e1a",
                    confirmButtonColor: "#e42314",
                });
                setFinished(true);
            } else {
                Swal.fire({
                    title: "Cancelado!",
                    text: "No se modifico el contenido de su carrito.",
                    icon: "error",
                    background: "#181e1a",
                    confirmButtonColor: "#e42314",
                });
            }
        });
    };

    return <CartOptions terminarCompra={terminarCompra} vaciarCart={vaciarCart} />;
};

export default CartOptionsContainer;
