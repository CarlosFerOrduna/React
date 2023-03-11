import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../itemsMock";

const ItemListContainer = () => {
    const { categoryName } = useParams();

    const [items, setItems] = useState([]);

    const itemsFiltered = products.filter((e) => e.category === categoryName) || products;

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
        <main>
            <ItemList items={items} />
        </main>
    );
};

export default ItemListContainer;
