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

function Cake(props: CakeInterface): JSX.Element {
    const { isFavorite, id } = props;
  const { handleFavorite } = props;
  const [thisFav,setThisFav]=useState();
    useEffect(() => {
       if(handleFavorite)
       handleFavorite(id,isFavorite?isFavorite:false)
       
    }, []);

  
  
  //   const [isFavorite, setFavorite] = useState(true);
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
  const addToFavorites = () => {
    const myFavLocalStorage = localStorage.getItem("myFavorites");
    if (myFavLocalStorage) {
      const myFav = JSON.parse(myFavLocalStorage) as CakeInterface[];
      myFav.push(props);
      localStorage.setItem("myFavorites", JSON.stringify(myFav));
    } else {
      const myarr = [];
      myarr.push(props);
      localStorage.setItem("myFavorites", JSON.stringify(myarr));
    }
  };
  console.log(props);
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
        <div id="buttonsContainer" onClick={() => {}}>
          <Button size="large" onClick={addToCart}>
            <AddShoppingCartIcon
              fontSize="inherit"
              style={{ color: "black" }}
            />
          </Button>
          <Button
            size="large"
            onClick={()=>handleFavorite && handleFavorite(id, isFavorite?isFavorite:false)}
          >
            {isFavorite ? (
              <FavoriteBorderIcon
                fontSize="inherit"
                style={{ color: "black" }}
                onClick={() => {
                  addToFavorites();
                  //   setFavorite(!isFavorite);
                }}
              />
            ) : (
              <FavoriteIcon
                fontSize="inherit"
                style={{ color: "black" }}
                onClick={() => addToFavorites()}
              />
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Cake;
