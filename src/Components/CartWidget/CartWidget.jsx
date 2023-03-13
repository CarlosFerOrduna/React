import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import styles from "./CartWidget.module.scss";

const CartWidgetPresentation = ({ quantity }) => {
    return (
        <Badge badgeContent={quantity} color="error">
            <ShoppingCartOutlinedIcon />
        </Badge>
    );
};

export default CartWidgetPresentation;
