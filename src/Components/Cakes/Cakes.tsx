import Cake from "../Cake/Cake";
import Header from "../Header/Header";
import "./Cakes.css";
import { cakesdata, cakesdataInterface } from "../../Data/cakesdata";

function Cakes(): JSX.Element {
  return (
    <div className="Cakes">
      <Header />
      <h1>העוגות שלי</h1>
      <div id="cakesContainer">
        {cakesdata.map((item:cakesdataInterface)=><Cake {...item}/>) }
        
        
      </div>
    </div>
  );
}

export default Cakes;
