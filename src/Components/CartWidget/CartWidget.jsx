import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const CartWidget = ({ quantity }) => {
    return (
        <Badge badgeContent={quantity} color="error">
            <ShoppingCartOutlinedIcon />
        </Badge>
    );
};

export default CartWidget;
