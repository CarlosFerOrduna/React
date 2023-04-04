import { Grid, TextField, Typography } from "@mui/material";
import styles from "./FormCheckout.module.scss";

const FormCheckout = ({ userData, handleChange, handleSubmit, setConfirmEmail, errorMessage }) => {
    return (
        <Grid spacyng={2} margin={3} justifyContent="center" alignItems="center">
            <form onSubmit={handleSubmit} className={styles.textFieldCheckout}>
                <TextField
                    label="Nombre"
                    variant="filled"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    color="error"
                    autoFocus={true}
                    value={userData.firstName}
                />
                <TextField
                    label="Apellido"
                    variant="filled"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    color="error"
                    value={userData.lastName}
                />
                <TextField
                    label="Telefono"
                    variant="filled"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    color="error"
                    value={userData.phone}
                />
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    color="error"
                    value={userData.email}
                />
                <TextField
                    label="Confirme email"
                    variant="filled"
                    type="email"
                    name="ConfirmEmail"
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    color="error"
                />
                <button>Realizar compra</button>
            </form>
            <Typography margin={5} variant="h4">
                {errorMessage}
            </Typography>
        </Grid>
    );
};

export default FormCheckout;
