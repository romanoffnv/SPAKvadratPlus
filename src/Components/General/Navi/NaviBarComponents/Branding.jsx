import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Navi/img/Logo.png";

export default function Branding() {
  let flag;
  const sideMenu = () => {
    if (flag === 0) {
      document.querySelector(".menuItems").style.height = "300px";
      flag = 1;
    } else {
      document.querySelector(".menuItems").style.height = "0";
      document.querySelector(".loginBlock").style.height = "0";
      flag = 0;
    }
  };

  return (
    <div>
      <div className="branding">
        <div className="sideMenu" onClick={sideMenu}>
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <Link className="logoContainer" to="/Main">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <Link className="brandNameContainer" to="/Main">
          <h1>КВАДРАТ+</h1>
        </Link>
      </div>
    </div>
  );
}
