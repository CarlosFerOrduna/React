import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import Form from "./Components/Form/Form";
import CartContextProvider from "./Context/CartContext";
import NotFound from "./Components/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryName" element={<ItemListContainer />} />
                    <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </CartContextProvider>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
