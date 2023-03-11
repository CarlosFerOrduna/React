import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Cart from "./Components/Cart/Cart";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryName" element={<ItemListContainer />} />
                <Route path="/itemDetail/:id" element={<ItemDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<h2>error 404: not found</h2>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
