import ItemList from "./ItemList";

const ItemListContainer = () => {
  const greeting = "Hola!";

  return (
    <main>
      <ItemList greeting={greeting} />
    </main>
  );
};

export default ItemListContainer;
