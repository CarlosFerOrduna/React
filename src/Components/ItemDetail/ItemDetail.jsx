import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ onAdd, item }) => {
    return (
        <div className={styles.item}>
            <h1>{item.title}</h1>
            <img src={item.img} alt={item.title} width="25%" />
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;
