import NavBrandContainer from "../NavBrand/NavBrandContainer";
import NavItemsContainer from "../NavItems/NavItemsContainer";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavBrandContainer />
      <NavItemsContainer />
    </div>
  );
};

export default Navbar;
