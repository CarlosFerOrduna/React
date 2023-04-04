import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const ItemCount = ({ counter, add, sub, onAdd }) => {
    return (
        <Box>
            <Typography variant="h5">Cantidad: {counter}</Typography>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" color="error" onClick={add}>
                    Sumar
                </Button>
                <Button variant="outlined" color="error" onClick={sub}>
                    Restar
                </Button>
                <Button variant="outlined" color="error" onClick={() => onAdd(counter)}>
                    Agregar al carrito
                </Button>
            </Stack>
        </Box>
    );
};

export default ItemCount;
