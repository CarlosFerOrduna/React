import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidget.module.scss";

const CartWidgetPresentation = ({ count }) => {
    return (
        <div className={styles.cartwidget}>
            <FaShoppingCart />
            <span>{count}</span>
        </div>
    );
};

export default CartWidgetPresentation;
