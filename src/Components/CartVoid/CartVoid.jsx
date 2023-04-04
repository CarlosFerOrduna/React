import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CartVoid = () => {
    return (
        <Grid item textAlign="center">
            <Typography variant="h2">Su carrito esta vacio</Typography>
            <Button variant="outlined" color="error">
                <Link to={"/"}>Seguir comprando</Link>
            </Button>
        </Grid>
    );
};

export default CartVoid;
