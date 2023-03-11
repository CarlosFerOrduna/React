import { useParams } from "react-router-dom";
import { products } from "../itemsMock";
import ItemCount from "../ItemCount/ItemCount";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ItemDetail = () => {
    const { id } = useParams();

    const itemSelected = products.find((e) => e.id === Number(id));

    const onAdd = () => {
        <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
        </Stack>;
    };

    return (
        <div>
            <h1>{itemSelected.title}</h1>
            <img src={itemSelected.img} alt="" />
            <ItemCount stock={itemSelected.stock} onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;
