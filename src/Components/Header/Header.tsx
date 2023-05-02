import "./Header.css";
import { Button, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CakeIcon from "@mui/icons-material/Cake";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter.value);
  console.log(count);

  const myStyle={
    width: "32.5rem",
        fontSize: "2.2rem",
        backgroundColor: "#fba5ed",
        color: "black",
        border: "dotted 1px #f48ce4",
  }
  return (
    <div className="Header">
      <div id="favAndCart">
        <Link to="/cart">
          <div id="cartContainer">
            <span>{count!=0?count:""}</span>
            <ShoppingCartRoundedIcon style={{ fontSize: "7rem" }} />
          </div>
        </Link>

        <Link to="/favorites">
          <FavoriteOutlinedIcon style={{ fontSize: "6rem" }} />
        </Link>
      </div>
      <div id="buttonConatiner">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState: any) => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                style={{
                  fontSize: "2.7rem",
                  backgroundColor: "#fba5ed",
                  fontFamily: "arial",
                  color: "black",
                }}
              >
                <ExpandMoreIcon  />
                תפריט
              </Button>

              <Menu {...bindMenu(popupState)} style={{ direction: "rtl" }}>
                <Link to="/">
                  <MenuItem
                    onClick={popupState.close}
                    style={myStyle}
                  >
                    דף הבית
                  </MenuItem>
                </Link>
                <Link to="/about">
                  <MenuItem
                    onClick={popupState.close}
                    style={myStyle}
                  >
                    קצת עליי...
                  </MenuItem>
                </Link>
                <Link to="/cakes">
                  <MenuItem
                    onClick={popupState.close}
                    style={myStyle}
                  >
                    העוגות שלי
                    <CakeIcon style={{ fontSize: "50px" }} />
                  </MenuItem>
                </Link>
                <Link to="/qa">
                  <MenuItem
                    onClick={popupState.close}
                    style={myStyle}
                  >
                    שאלות ותשובות
                  </MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
}

export default Header;
