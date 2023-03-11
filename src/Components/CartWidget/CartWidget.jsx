import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidget.module.scss";

const CartWidgetPresentation = ({ cart }) => {
    return (
        <div className={styles.cartwidget}>
            <FaShoppingCart />
            <span>{cart}</span>
        </div>
    );
};

export default CartWidgetPresentation;
