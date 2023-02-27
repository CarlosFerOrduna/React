import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidgeet.module.scss";

const CartWidgetPresentation = ({ count }) => {
  return (
    <div className={styles.cartwidget}>
      <FaShoppingCart />
      <span>{count}</span>
    </div>
  );
};

export default CartWidgetPresentation;
