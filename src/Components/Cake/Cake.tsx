import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Cake.css";
import { CakeInterface } from "../../Data/cakesdata";

function Cake(props: CakeInterface): JSX.Element {
  const addToCart = () => {
    const myCartLocalStorage = localStorage.getItem("myCart");
    if (myCartLocalStorage) {
      const myCart = JSON.parse(myCartLocalStorage);
      if (myCart[props.id]) {
        myCart[props.id]++;
      } else {
        myCart[props.id] = 1;
      }
      localStorage.setItem("myCart", JSON.stringify(myCart));
    } else {
      const cart: { [key: string]: number } = {};
      cart[props.id] = 1;
      localStorage.setItem("myCart", JSON.stringify(cart));
    }
  };
  console.log(props);
  return (
    <div className="Cake">
      <Card sx={{ maxWidth: 645 }}>
        <CardMedia
          sx={{ height: 340 }}
          image={props.img}
          title="green iguana"
        />
        <CardContent
          style={{ textAlign: "center", backgroundColor: "transparent" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: "40px" }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontSize: "20px" }}
          >
            {`${props.price}`}&#8362;
          </Typography>
        </CardContent>
        <CardActions style={{ alignItems: "center" }}>
          <Button size="small" onClick={addToCart}>
            הזמן
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cake;
