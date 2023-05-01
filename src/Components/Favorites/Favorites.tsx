import { useEffect, useState } from "react";
import Header from "../Header/Header";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { CakesArray as Cakes, CakeInterface } from "../../Data/cakesdata";
import Cake from "../Cake/Cake";
import "./Favorites.css";

function Favorites(): JSX.Element {
  const [favorites, setFavorites] = useState<{ [key: string]: string }>({});
  const [stam, setstam] = useState(false);

  useEffect(() => {
    const myFavoriteLocalStorage = localStorage.getItem("myFavorites");
    if (myFavoriteLocalStorage) {
      const favorites: { [key: string]: string } = JSON.parse(
        myFavoriteLocalStorage
      );
      setFavorites(favorites);
      console.log(favorites);
    } else {
      console.log("אין מועדפים");
    }
  }, []);

  const addToCart = (id: string) => {
    const myCartLocalStorage = localStorage.getItem("myCart");
    if (myCartLocalStorage) {
      const myCart = JSON.parse(myCartLocalStorage);
      if (myCart[id]) {
        myCart[id]++;
      } else {
        myCart[id] = 1;
      }
      localStorage.setItem("myCart", JSON.stringify(myCart));
    } else {
      const cart: { [key: string]: number } = {};
      cart[id] = 1;
      localStorage.setItem("myCart", JSON.stringify(cart));
    }
  };
  const checkIsFavorites = (id: string) => {
    const myFavoriteLocalStorage = localStorage.getItem("myFavorites");
    if (myFavoriteLocalStorage) {
      const favorites: { [key: string]: string } = JSON.parse(
        myFavoriteLocalStorage
      );
      if (favorites[id]) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  const handleFavorites = (id: string) => {
    const myFavoritesLocalStorage = localStorage.getItem("myFavorites");
    if (myFavoritesLocalStorage) {
      const myFavorites = JSON.parse(myFavoritesLocalStorage);
      if (myFavorites[id] !== undefined) {
        myFavorites[id] = !myFavorites[id];
      } else {
        myFavorites[id] = true;
      }

      localStorage.setItem("myFavorites", JSON.stringify(myFavorites));
      setFavorites(myFavorites);
    } else {
      const myFavorites: { [key: string]: boolean } = {};
      myFavorites[id] = true;
      localStorage.setItem("myFavorites", JSON.stringify(myFavorites));
    }
  };
  return (
    <div className="Favorites">
      <Header />
      <h1>
        My
        <FavoriteOutlinedIcon style={{ fontSize: "8vh" }} />
        cakes
      </h1>
      <div id="favoritesContainer">
        {" "}
        {Cakes.filter((favorite) => favorites[favorite.id]).map(
          (cake, index) => (
            <Cake
              key={index}
              {...cake}
              handleFavorites={handleFavorites}
              checkIsFavorites={checkIsFavorites}
              addToCart={addToCart}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Favorites;
