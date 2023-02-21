import styles from "./ItemList.module.scss";

const ItemList = ({ greeting }) => {
  return (
    <>
      <h2 className={styles.items}>{greeting}</h2>
    </>
  );
};

export default ItemList;
