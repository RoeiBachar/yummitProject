import { Add } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import "./Routing.css";
import Cakes from "../Cakes/Cakes";
import QA from "../QA/QA";
import About from "../About/About";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default Routing;
