import React from "react";
import Header from "./Header/Header";
import PriceCalc from "./PriceCalc/PriceCalc";
import Body from "./Body/Body";
import './Main.css' 

export default function Main() {
  return (
    <div className="Main">
      <div className="MainWrapper">
        <Header />
        <PriceCalc />
        <Body />
      </div>
    </div>
  );
}
