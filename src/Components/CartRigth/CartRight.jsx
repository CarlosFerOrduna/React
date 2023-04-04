import { Box, Grid, Typography } from "@mui/material";
import CartOptionsContainer from "../CartOptions/CartOptionsContainer";

const CartRight = ({ getTotalPrice, clearCart, setFinished }) => {
    return (
        <Grid item xs={3} margin={3} sx={{ borderLeft: "1px #e42314 solid" }}>
            <Box marginLeft={2}>
                <Typography variant="h5" gutterBottom>
                    El total del carrito es: {getTotalPrice()}
                </Typography>
            </Box>
            <Box marginLeft={2}>
                <CartOptionsContainer clearCart={clearCart} setFinished={setFinished} />
            </Box>
        </Grid>
    );
};

export default CartRight;
