import ItemList from "./ItemList";

const ItemListContainer = () => {
  const greeting = "Hola!";

  return (
    <>
      <ItemList greeting={greeting} />
    </>
  );
};

export default ItemListContainer;
