import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import CartVoid from "../CartVoid/CartVoid";
import Cart from "./Cart";
import FormCheckoutContainer from "../FormCheckout/FormCheckoutContainer";

const CartContainer = () => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const [isFinished, setFinished] = useState(false);
    const [orderId, setOrderId] = useState(null);

    if (cart.length === 0 && orderId === null) {
        return <CartVoid />;
    }

    return (
        <Box>
            {!isFinished ? (
                <Cart cart={cart} getTotalPrice={getTotalPrice} clearCart={clearCart} setFinished={setFinished} />
            ) : (
                <FormCheckoutContainer orderId={orderId} setOrderId={setOrderId} />
            )}
        </Box>
    );
};

export default CartContainer;
