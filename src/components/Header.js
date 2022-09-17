import React from "react";
import "./Header.css";
import PinterestIcon from "@mui/icons-material/Pinterest";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <>
      <div className="header__wrapper">
        <div className="header__logo">
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </div>
        <div className="header__button homePage">
          <a href="/">Homepage</a>
        </div>
        <div className="header__button following">
          <a href="/">Following</a>
        </div>
        <div className="header__search">
          <div className="header__searchContainer">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <form>
              <input type="text" name="" id="" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="header__menuItems">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <TextsmsIcon />
          </IconButton>
          <IconButton>
            <FaceIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
