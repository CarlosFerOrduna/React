import { useState } from "react";

const Form = () => {
    const [userData, setuserData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setuserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log(userData);

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <input type="text" name="username" onChange={handleChange} placeholder="Ingrese nombre" />
                <input type="text" name="email" onChange={handleChange} placeholder="Ingrese email" />
                <input type="text" name="password" onChange={handleChange} placeholder="Ingrese contraseña" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
