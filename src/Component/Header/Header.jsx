import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WalletIcon from "@mui/icons-material/Wallet";
const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__wraper">
        <div className="left">
          <div className="language">EN</div>
          <div className="header__container">
            <h5>Welcome!</h5>
            <h3>Dashboard</h3>
          </div>
        </div>
        <div className="center">
          <div className="search__container">
            <input placeholder="Search.." />
            <SearchIcon style={{ color: "gray", fontSize: "25px" }} />
          </div>
        </div>
        <div className="right">
          <div className="menu__item">
            <button
              type="button"
              class="btn btn-outline-primary"
              className="menu__item__button"
            >
              <WalletIcon /> Wallet
            </button>
            <div className="item__badge">
              <Badge badgeContent={4} color="primary">
                <NotificationsActiveIcon />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
