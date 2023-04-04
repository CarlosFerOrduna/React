import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (item) => {
        const exist = cart.some((element) => element.id === item.id);

        if (exist) {
            let newCart = cart.map((element) => {
                if (element.id === item.id) {
                    return {
                        ...element,
                        quantity: item.quantity,
                    };
                } else {
                    return element;
                }
            });

            setCart(newCart);
        } else {
            setCart([...cart, item]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, element) => {
            return acc + element.quantity;
        }, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, element) => {
            return acc + element.quantity * element.price;
        }, 0);
    };

    const getQuantityById = (id) => {
        const item = cart.find((element) => Number(element.id) === Number(id));
        return item?.quantity;
    };

    const deteleItemById = (id) => {
        const newCart = cart.filter((element) => Number(element.id) !== Number(id));
        setCart(newCart);
    };

    const data = {
        cart,
        addCart,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        deteleItemById,
        getQuantityById,
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
