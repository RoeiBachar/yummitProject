import "./Header.css";
import { Button, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CakeIcon from "@mui/icons-material/Cake";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <div id="favAndCart">
        <ShoppingCartOutlinedIcon style={{fontSize:"7vh"}} />
        <FavoriteOutlinedIcon style={{fontSize:"7vh"}} />
      </div>
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
                  color:"black"
                }}
              >
                <ExpandMoreIcon style={{ fontSize: "50px" }} />
                תפריט
              </Button>
              
              <Menu {...bindMenu(popupState)} style={{ direction: "rtl" }}>
              <a href="/">
              <MenuItem
                  onClick={popupState.close}
                  style={{
                    fontSize: "50px",
                    width: "40vh",
                    backgroundColor: "#fba5ed",
                    color: "black",
                    border: "dotted 1px #f48ce4",
                  }}
                >
                  דף הבית
                </MenuItem>
                </a>
                <a href="/about">
                <MenuItem
                  onClick={popupState.close}
                  style={{
                    fontSize: "50px",
                    width: "40vh",
                    backgroundColor: "#fba5ed",
                    color: "black",
                    border: "dotted 1px #f48ce4",
                    

                  }}
                >
                  קצת עליי...
                </MenuItem>
                </a>
                <a href="/cakes">
                <MenuItem
                  onClick={popupState.close}
                  style={{
                    fontSize: "50px",
                    width: "40vh",
                    backgroundColor: "#fba5ed",
                    color: "black",
                    border: "dotted 1px #f48ce4",
                  }}
                >
                  העוגות שלי
                  <CakeIcon style={{ fontSize: "50px" }} />
                </MenuItem>
                </a>
                <a href="/qa">
                <MenuItem
                  onClick={popupState.close}
                  style={{
                    fontSize: "50px",
                    width: "40vh",
                    backgroundColor: "#fba5ed",
                    color: "black",
                    border: "dotted 1px #f48ce4",
                  }}
                >
                  שאלות ותשובות
                </MenuItem>
                </a>
              </Menu>
              
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
}

export default Header;
