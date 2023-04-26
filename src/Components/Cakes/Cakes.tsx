import Cake from "../Cake/Cake";
import Header from "../Header/Header";
import "./Cakes.css";
import { CakesArray, CakeInterface } from "../../Data/cakesdata";

function Cakes(): JSX.Element {
  return (
    <div className="Cakes">
      <Header />
      <h1>העוגות שלי</h1>
      <div id="cakesContainer">
        {CakesArray.map((item:CakeInterface)=><Cake {...item}/>) }
        
        
      </div>
    </div>
  );
}

export default Cakes;
