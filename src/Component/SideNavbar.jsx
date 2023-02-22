import React from "react";

import { menuItem } from "../Constant/menuItem";
import "./sideNavbar.css";
import menuImage from "../Constant/menuImage";
import logo from "../assets/logo.png";
import settings from "../assets/settings.png";

const SideNavbar = () => {
  return (
    <div className="nav__menu">
      <div>
        <div className="logo">
          <img className="logo__image" alt="logo" src={logo} />
        </div>
        {menuItem.map((item, index) => {
          return (
            <div className="menuItems-Wrapper" key={index}>
              <img
                alt={item.name}
                src={menuImage[item.iconName]}
                height="20px"
                width="20px"
              />
            </div>
          );
        })}
      </div>
      <div className="settings">
        <img className="setting__img" src={settings} alt="" />
      </div>
    </div>
  );
};

export default SideNavbar;
