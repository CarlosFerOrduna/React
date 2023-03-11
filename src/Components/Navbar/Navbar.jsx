import NavBrand from "../NavBrand/NavBrand";
import NavItems from "../NavItems/NavItems";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <NavBrand />
            <NavItems />
        </div>
    );
};

export default Navbar;
