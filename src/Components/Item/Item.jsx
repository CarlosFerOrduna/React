import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
    return (
        <Card className={styles.card}>
            <CardMedia component="img" alt={element.title} image={element.img} className={styles.cardMedia} />
            <CardContent className={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                    {element.title}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {element.price}
                </Typography>
                <Typography variant="body2">{element.description}</Typography>
            </CardContent>
            <CardActions className={styles.cardAction}>
                <Link to={`/itemDetail/${element.id}`} className={styles.cardLink}>
                    <Button className={styles.cardButton}>Ver detalle</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Item;
