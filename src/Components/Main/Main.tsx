import Header from "../Header/Header";
import "./Main.css";
import logo from "../../img/2-removebg-preview.png";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CakeIcon from "@mui/icons-material/Cake";

function Main(): JSX.Element {
  return (
    <div className="Main">
      <Header />
      <img src={logo} width={700} draggable={false} />
      <div id="buttonConatiner">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState: any) => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                style={{
                  fontSize: "50px",
                  width: "40vh",
                  backgroundColor: "#fba5ed",
                  fontFamily: "arial",
                }}
              >
                <ExpandMoreIcon style={{ fontSize: "50px" }} />
                תפריט
              </Button>
              <Menu {...bindMenu(popupState)} style={{ direction: "rtl" }}>
                <MenuItem
                  onClick={popupState.close}
                  style={{
                    fontSize: "50px",
                    width: "40vh",
                    backgroundColor: "#fba5ed",
                    color: "white",
                    border:"dotted 1px #f48ce4"
                  }}
                >
                  קצת עליי...
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  style={{
                    fontSize: "50px",
                    width: "40vh",
                    backgroundColor: "#fba5ed",
                    color: "white",
                    border:"dotted 1px #f48ce4"
                  }}
                >
                  העוגות שלי
                  <CakeIcon style={{ fontSize: "50px" }} />
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  style={{
                    fontSize: "50px",
                    width: "40vh",
                    backgroundColor: "#fba5ed",
                    color: "white",
                    border:"dotted 1px #f48ce4"
                  }}
                >
                  שאלות ותשובות
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
}

export default Main;
