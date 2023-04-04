import { Box, Stack, Button } from "@mui/material";

const CartItemsButtons = ({ add, sub, deleteItem, item }) => {
    return (
        <Box>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" color="error" onClick={add}>
                    +
                </Button>
                <Button variant="outlined" color="error" onClick={sub}>
                    -
                </Button>
                <Button variant="outlined" color="error" onClick={deleteItem}>
                    Borrar
                </Button>
            </Stack>
        </Box>
    );
};

export default CartItemsButtons;
