import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
        <div>
            <h2>{counter}</h2>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={add}>
                    Sumar
                </Button>
                <Button variant="outlined" onClick={substract}>
                    Restar
                </Button>
                <Button variant="outlined" onClick={() => onAdd(counter)}>
                    Agregar al carrito
                </Button>
            </Stack>
        </div>
    );
};

export default ItemCount;
