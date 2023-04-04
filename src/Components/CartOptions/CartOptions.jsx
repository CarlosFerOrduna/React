import { Button, Stack } from "@mui/material";

const CartOptions = ({ terminarCompra, vaciarCart }) => {
    return (
        <Stack spacing={1} direction="row">
            <Button variant="outlined" color="error" onClick={terminarCompra}>
                Terminar la compra
            </Button>
            <Button variant="outlined" color="error" onClick={vaciarCart}>
                Vaciar carrito
            </Button>
        </Stack>
    );
};

export default CartOptions;
