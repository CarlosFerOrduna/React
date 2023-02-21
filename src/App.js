import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";

function App() {
  return (
    <div>
      <header>
        <NavbarContainer />
      </header>
      <main>
        <ItemListContainer />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
