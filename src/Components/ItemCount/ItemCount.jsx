import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const add = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const substract = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <Box>
            <Typography variant="h5">Cantidad: {counter}</Typography>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" color="error" onClick={add}>
                    Sumar
                </Button>
                <Button variant="outlined" color="error" onClick={substract}>
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
