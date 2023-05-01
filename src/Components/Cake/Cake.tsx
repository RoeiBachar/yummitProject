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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";

function Cake(props: CakeInterface): JSX.Element {
  const { isFavorite, id, handleFavorites, addToCart, checkIsFavorites } =
    props;
  const [stam, setstam] = useState(false);
  const dispatch = useDispatch()

  return (
    <div className="Cake">
      <Card sx={{ maxWidth: 645 }}>
        <CardMedia sx={{ height: 340 }} image={props.img} />
        <CardContent
          style={{ textAlign: "center", backgroundColor: "rgb(251, 165, 237)" }}
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
        <div id="buttonsContainer">
          <Button
            size="large"
            onClick={() => {
              addToCart && addToCart(id);
              dispatch(increment());
            }}
          >
            <AddShoppingCartIcon
              fontSize="inherit"
              style={{ color: "black" }}
            />
          </Button>
          <Button
            size="large"
            onClick={() => {
              handleFavorites && handleFavorites(id);
              setstam(!stam);
            }}
          >
            {checkIsFavorites && checkIsFavorites(id) ? (
              <FavoriteIcon fontSize="inherit" style={{ color: "black" }} />
            ) : (
              <FavoriteBorderIcon
                fontSize="inherit"
                style={{ color: "black" }}
              />
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Cake;
