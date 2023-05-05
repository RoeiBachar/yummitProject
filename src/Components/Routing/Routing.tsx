import { Add } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import "./Routing.css";
import Cakes from "../Cakes/Cakes";
import QA from "../QA/QA";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAmount } from "../../redux/counterSlice";
import Header from "../Header/Header";

function Routing(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    const myCartCountLocalStorage = localStorage.getItem("myCartCount");
    if (myCartCountLocalStorage) {
      let myCount = JSON.parse(myCartCountLocalStorage);
      dispatch(updateAmount(myCount));
    }
  }, []);
  return (
    <>
      <Header />
      <div className="Routing">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default Routing;
