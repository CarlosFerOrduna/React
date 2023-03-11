import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = ({ items }) => {
    return (
        <div className={styles.itemList}>
            {items.map((element) => {
                return <Item key={element.id} element={element} />;
            })}
        </div>
    );
};

export default ItemList;
