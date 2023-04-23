import Cake from "../Cake/Cake";
import Header from "../Header/Header";
import "./Cakes.css";

function Cakes(): JSX.Element {
  return (
    <div className="Cakes">
      <Header />
      <h1>העוגות שלי</h1>
      <div id="cakesContainer">
        <Cake />
        <Cake />
        <Cake />
      </div>
    </div>
  );
}

export default Cakes;
