import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const CartWidgetContainer = () => {
    const count = 0;

    return (
        <Link to="/cart">
            <CartWidget count={count} />
        </Link>
    );
};

export default CartWidgetContainer;
