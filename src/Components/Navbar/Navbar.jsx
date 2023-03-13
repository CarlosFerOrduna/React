import { Box } from "@mui/material";
import NavBrand from "../NavBrand/NavBrand";
import NavItems from "../NavItems/NavItems";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <Box className={styles.navbar}>
            <NavBrand />
            <NavItems />
        </Box>
    );
};

export default Navbar;
