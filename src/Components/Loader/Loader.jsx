import { Grid } from "@mui/material";
import { ClockLoader } from "react-spinners";

const Loader = () => {
    return (
        <Grid container justifyContent="center" alignItems="stretch">
            <ClockLoader color="#ffe001" size={650} />
        </Grid>
    );
};

export default Loader;
