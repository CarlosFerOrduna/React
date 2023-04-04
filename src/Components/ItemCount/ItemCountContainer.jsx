import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, initial = 1, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const add = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const sub = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return <ItemCount counter={counter} add={add} sub={sub} onAdd={onAdd} />;
};

export default ItemCountContainer;
