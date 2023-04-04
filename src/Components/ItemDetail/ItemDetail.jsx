import CardMedia from "@mui/material/CardMedia";
import { Grid, Typography } from "@mui/material";
import ItemCountContainer from "../ItemCount/ItemCountContainer";

const ItemDetail = ({ onAdd, item, quantity }) => {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
            <Grid item xs={5}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1">{item.description}</Typography>
                <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={quantity} />
            </Grid>
            <Grid item xs={4}>
                <CardMedia component="img" image={item.img} alt={item.title} />
            </Grid>
        </Grid>
    );
};

export default ItemDetail;
