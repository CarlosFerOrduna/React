import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CartItemsButtonsContainer from "../CartItemsButtons/CartItemsButtonsContainer";

const CartLeft = ({ cart }) => {
    return (
        <Grid item xs={6} margin={3}>
            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: "#181e1a",
                    border: "0.01rem #e42314 solid",
                }}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: "#ffe001" }}>Nombre</TableCell>
                            <TableCell sx={{ color: "#ffe001" }}>Precio</TableCell>
                            <TableCell sx={{ color: "#ffe001" }}>Categoria</TableCell>
                            <TableCell sx={{ color: "#ffe001" }}>Cantidad</TableCell>
                            <TableCell sx={{ color: "#ffe001" }}>Opciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((row) => (
                            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell sx={{ color: "#ffe001" }} component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell sx={{ color: "#ffe001" }}>{row.price}</TableCell>
                                <TableCell sx={{ color: "#ffe001" }}>{row.category}</TableCell>
                                <TableCell sx={{ color: "#ffe001" }}>{row.quantity}</TableCell>
                                <TableCell sx={{ color: "#ffe001" }}>
                                    <CartItemsButtonsContainer item={row} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default CartLeft;
