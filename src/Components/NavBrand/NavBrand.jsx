import styles from "./NavBrand.module.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const NavBrand = () => {
    return (
        <Link to="/" className={styles.brand}>
            <Button className={styles.brand}>
                <BrandImage />
                <BrandTitle />
            </Button>
        </Link>
    );
};

export default NavBrand;

const BrandImage = () => {
    return <img className={styles.brand__image} src="./logo.png" alt="pizzas planet" />;
};

const BrandTitle = () => {
    return <h2 className={styles.brand__title}>FPizza</h2>;
};
