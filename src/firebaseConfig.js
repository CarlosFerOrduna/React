import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuyq34fvxwSOaCbZxOoClyVX4Q0xBytXw",
    authDomain: "fpizza-ba8c9.firebaseapp.com",
    projectId: "fpizza-ba8c9",
    storageBucket: "fpizza-ba8c9.appspot.com",
    messagingSenderId: "317311750092",
    appId: "1:317311750092:web:09118bd7581ac2ed1e1769",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
