import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <Box>
            <Typography variant="h3">Carrito</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Cantidad</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((row) => (
                            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Cart;
