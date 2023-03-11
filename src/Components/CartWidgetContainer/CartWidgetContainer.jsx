import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidgetContainer = () => {
    const { getTotalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart">
            <CartWidget cart={getTotalQuantity()} />
        </Link>
    );
};

export default CartWidgetContainer;
