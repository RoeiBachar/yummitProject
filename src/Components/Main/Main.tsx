import Header from "../Header/Header";
import "./Main.css";
import logo from "../../img/2-removebg-preview.png";

function Main(): JSX.Element {
  return (
    <div className="Main">
      <img src={logo} width={700} draggable={false} />
    </div>
  );
}

export default Main;
