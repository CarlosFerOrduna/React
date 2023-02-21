import { FaShoppingCart } from "react-icons/fa";
import styles from "../../style/variables.scss";

const CartWidgetPresentation = ({ count }) => {
  return (
    <div className={styles.artwidget}>
      <FaShoppingCart />
      <span>{count}</span>
    </div>
  );
};

export default CartWidgetPresentation;
