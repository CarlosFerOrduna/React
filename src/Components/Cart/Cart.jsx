import { Box, Grid, Typography } from "@mui/material";
import CartLeft from "../CartLeft/CartLeft";
import CartRight from "../CartRigth/CartRight";

const Cart = ({ cart, getTotalPrice, clearCart, setFinished }) => {
    return (
        <Box>
            <Typography variant="h3" margin={3}>
                Carrito
            </Typography>
            <Grid container spacing="3">
                <CartLeft cart={cart} />
                <CartRight getTotalPrice={getTotalPrice} clearCart={clearCart} setFinished={setFinished} />
            </Grid>
        </Box>
    );
};

export default Cart;
