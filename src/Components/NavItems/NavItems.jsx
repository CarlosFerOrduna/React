import CartWidgetContainer from "../CartWidgetContainer/CartWidgetContainer";
import styles from "./NavItems.module.scss";
import { Link } from "react-router-dom";

const NavItems = () => {
    return (
        <>
            <ul className={styles.items}>
                <li>
                    <Link to="/">Todas</Link>
                </li>
                <li>
                    <Link to="/category/pizza">Pizzas</Link>
                </li>
                <li>
                    <Link to="/category/focaccia">Focaccias</Link>
                </li>
                <li>
                    <CartWidgetContainer />
                </li>
            </ul>
        </>
    );
};

export default NavItems;
