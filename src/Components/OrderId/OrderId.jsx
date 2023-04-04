import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderId = ({ orderId }) => {
    return (
        <Grid textAlign="center" margin={5}>
            <Typography variant="h2">Gracias por su compra</Typography>
            <Typography variant="h5">El comprobante es: {orderId}</Typography>
            <Button variant="outlined" color="error">
                <Link to={"/"}>Seguir comprando</Link>
            </Button>
        </Grid>
    );
};

export default OrderId;
