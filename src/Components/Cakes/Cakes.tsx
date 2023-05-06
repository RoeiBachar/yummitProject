import Cake from "../Cake/Cake";
import "./Cakes.css";
import { CakesArray } from "../../Data/cakesdata";
import { addToCart } from "../services/functions";

function Cakes(): JSX.Element {
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
    } else {
      const myFavorites: { [key: string]: boolean } = {};
      myFavorites[id] = true;
      localStorage.setItem("myFavorites", JSON.stringify(myFavorites));
    }
  };

  return (
    <div className="Cakes">
      <h1>העוגות שלי</h1>
      <div id="cakesContainer">
        {CakesArray.map((cake, index) => (
          <Cake
            {...cake}
            handleFavorites={handleFavorites}
            addToCart={addToCart}
            checkIsFavorites={checkIsFavorites}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Cakes;
