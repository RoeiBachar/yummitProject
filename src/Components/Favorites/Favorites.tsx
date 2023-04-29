import { useEffect } from "react";
import Header from "../Header/Header";
import "./Favorites.css";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { CakesArray, CakeInterface } from "../../Data/cakesdata";
import Cake from "../Cake/Cake";

function Favorites(): JSX.Element {
  useEffect(() => {}, []);
  const handleFavorite = (id: string, isFavorite: boolean) => {
    const checkFav = localStorage.getItem("favorites");
    console.log(checkFav);
    
    if (checkFav) {
      
      let data = JSON.parse(checkFav);
      console.log(data);
      let updatedData = [...data];
      console.log(updatedData);
      updatedData = data.map((item: CakeInterface) => {
        if (id === item.id) {
          return {
            ...item,
            isFavorite: !isFavorite,
          };
          
        }
        console.log(updatedData);
      });
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
      {CakesArray.map((item: CakeInterface,index) => (
        <Cake key={index} {...item} handleFavorite={handleFavorite} />
      ))}
    </div>
  );
}

export default Favorites;
