import { Box, List, Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ onAdd, item }) => {
    return (
        <Box className={styles.item} key={item.id}>
            <Typography variant="h4">{item.title}</Typography>
            <img src={item.img} alt={item.title} width="25%" />
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </Box>
    );
};

export default ItemDetail;
