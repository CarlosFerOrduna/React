import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import OrderId from "../OrderId/OrderId";
import FormCheckout from "./FormCheckout";

const FormCheckoutContainer = ({ orderId, setOrderId }) => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            userData.firstName.length > 3 &&
            userData.lastName.length > 3 &&
            userData.email.includes("@") &&
            userData.phone.length > 9 &&
            userData.email === confirmEmail
        ) {
            setErrorMessage("");
            const total = getTotalPrice();
            const order = {
                buyer: userData,
                items: cart,
                total,
            };

            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order)
                .then((res) => {
                    setOrderId(res.id);
                    clearCart();
                })
                .catch((err) => console.log(err));

            cart.map((element) => {
                let refDoc = doc(db, "items", element.id);
                updateDoc(refDoc, { stock: element.stock - element.quantity });
            });
        } else {
            setErrorMessage("Los datos ingresados no son correctos");
        }
    };

    return (
        <Grid>
            {orderId === null ? (
                <FormCheckout
                    handleSubmit={handleSubmit}
                    userData={userData}
                    handleChange={handleChange}
                    setConfirmEmail={setConfirmEmail}
                    errorMessage={errorMessage}
                />
            ) : (
                <OrderId orderId={orderId} />
            )}
        </Grid>
    );
};

export default FormCheckoutContainer;
