import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div
            style={{
                textAlign: "center",
            }}
        >
            <h1>Carrito</h1>
            {cart.map((e) => {
                return (
                    <div key={e.id}>
                        <h2>{e.title}</h2>
                        <h3>{e.price}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
