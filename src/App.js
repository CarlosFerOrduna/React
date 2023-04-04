import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CartContextProvider from "./Context/CartContext";
import NotFound from "./Components/NotFound/NotFound";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import CartContainer from "./Components/Cart/CartContainer";
import FormCheckoutContainer from "./Components/FormCheckout/FormCheckoutContainer";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/categories/:categoryName" element={<ItemListContainer />} />
                    <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartContainer />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/checkout" element={<FormCheckoutContainer />} />
                </Routes>
            </CartContextProvider>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
