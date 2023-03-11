import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (item) => {
        if (isInCart(item)) {
            let newCart = cart.map((e) => {
                if (e.id === item.id) {
                    return {};
                }
            });
        } else {
            setCart([...cart, item]);
        }
    };

    const isInCart = ({ id }) => {
        return cart.some((e) => e.id === id);
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, e) => {
            return acc + e.quantity;
        }, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, e) => {
            return acc + e.quantity * e.price;
        }, 0);
    };

    const data = {
        cart,
        addCart,
        getTotalQuantity,
    };
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
