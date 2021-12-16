import React from "react";
import "./Header.css";
import Bld from "./img/bld.png";

export default function Header() {
  return (
    <div className="header">
      <div className = 'spacer' style = {{height: '115px'}}></div>
      <div className = "headerWrapper">
        <div className = "heroText">
          <h2>Там, где для одних стена, <br /> другие видят окно... </h2>
          <p>Ремонт пластиковых окон в день обращения</p>
          <div className = "contactsButton" onClick={() => {
            let x = document.getElementById('contacts')
               x.scrollIntoView({ behavior: 'smooth' })
          }}>Связаться с нами
          </div>
        </div>
        <div className = "heroImg">
          <img src={Bld} alt="header building" />
        </div>
      </div>
    </div>
  );
}
