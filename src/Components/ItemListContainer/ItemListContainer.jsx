import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../itemsMock";
import { Box } from "@mui/material";

const ItemListContainer = () => {
    const { categoryName } = useParams();

    const [items, setItems] = useState([]);

    const itemsFiltered = products.filter((e) => e.category === categoryName);

    useEffect(() => {
        const itemList = new Promise((r, e) => {
            r(categoryName ? itemsFiltered : products);
        });

        itemList
            .then((res) => {
                setItems(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [categoryName]);

    return (
        <Box>
            <ItemList items={items} />
        </Box>
    );
};

export default ItemListContainer;
