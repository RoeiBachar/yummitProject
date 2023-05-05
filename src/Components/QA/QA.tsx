import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import Header from "../Header/Header";
import "./QA.css";
import { qadata } from "../../Data/qadata"
function QA(): JSX.Element {
  return (
    <div className="QA">
      <h1>שאלות ותשובות</h1>
      <div id="qaContainer">
        {qadata.map((item, index) =>
          <Accordion
            key={index}
            style={{ maxWidth: "100%", width: "90%", backgroundColor: "rgb(251, 165, 237)" }}
          >
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
              <Typography style={{ fontSize: "2rem", fontWeight: "bold", fontFamily: "Gisha" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "2rem" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>

        )}
      </div>
    </div>
  );
}

export default QA;
