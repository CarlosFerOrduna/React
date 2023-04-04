import styles from "./NavItems.module.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CartWidgetContainer from "../CartWidget/CartWidgetContainer";

const NavItems = () => {
    return (
        <>
            <ul className={styles.items}>
                <li>
                    <Link to="/">
                        <Button variant="text">Todas</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/categories/pizza">
                        <Button variant="text">Pizzas</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/categories/focaccia">
                        <Button variant="text">Focaccias</Button>
                    </Link>
                </li>
                <li>
                    <Button variant="text">
                        <CartWidgetContainer />
                    </Button>
                </li>
            </ul>
        </>
    );
};

export default NavItems;
