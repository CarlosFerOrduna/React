import { Box } from "@mui/material";
import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = ({ items }) => {
    return (
        <Box className={styles.itemList}>
            {items.map((element) => {
                return <Item key={element.id} element={element} />;
            })}
        </Box>
    );
};

export default ItemList;
