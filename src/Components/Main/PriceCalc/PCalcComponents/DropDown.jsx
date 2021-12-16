import React, { useState, useContext } from "react";
import { REPDATA } from "../../../General/Cards/CardData/RepCardData";
import { optionContext } from "../PriceCalc";
import DDButton from "./DDButton";
import "./DropDown.css";

function DropDown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const value = useContext(optionContext);

  const options = REPDATA;

  return (
    <div className="dropdown">
      <div className="ddfield">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>{selected}</div>
        <i className="fas fa-caret-down"></i>
    </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <Subcomponent
                key={option._id}
                optionName={option.name}
                optionId={option._id}
                optionPrice={option.price}
                setSelected={setSelected}
                setIsActive={setIsActive}
              />
            ))}
          </div>
        )}
      
      <DDButton option={value} />
    </div>
  );
}

export default DropDown;

export const Subcomponent = ({
  optionName,
  optionId,
  setSelected,
  setIsActive,
  optionPrice,
}) => {
  const option = useContext(optionContext);
  return (
    <div
      className="dropdown-item"
      onClick={(e) => {
        setSelected(optionName);
        setIsActive(false);
        option.setOptId(optionId);
        option.setOptPrice(optionPrice);
      }}
    >
      {optionName}
    </div>
  );
};
