import React from "react";
import "./Navi.css";
import Login from "./Login/Login";
import Menu from "./NaviBarComponents/Menu";
import Branding from "./NaviBarComponents/Branding";


export default function Navi() {
  return (
    <div>
      <div className="topNavi">
        <Branding />
        <div className = "wrappingBlock">
        <div className="menuItems">
          <Menu />
        </div>
        <div className='loginBlock'>
             <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

