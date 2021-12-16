import React, { useState } from "react";
import "./PriceCalc.css";
import WindPrice from "./img/windowPriceCalc.png";
import DropDown from "./PCalcComponents/DropDown";

export const optionContext = React.createContext();

export default function PriceCalc() {
  const [selected, setSelected] = useState("Выберите из списка");
  const [optId, setOptId] = useState(null);
  const [optPrice, setOptPrice] = useState('superPrice');

  return (
    <div className="priceCalc">
      <div className="pCalcWrapper">
        <div className="left-group">
          <div className="pcalcText">
            <h3>Оценка стоимости ремонта</h3>
            <p>
              * Оценка стоимости ремонта на сайте является приблизительным.{" "}
              <br />
              Точный расчет производится мастером на объекте
            </p>
          </div>
          <div className="form-group">
            <optionContext.Provider value={{
              optId: optId,
              optPrice: optPrice,
              setOptId,
              setOptPrice,
            }}>
              <DropDown selected={selected} setSelected={setSelected} />
            </optionContext.Provider>
          </div>
        </div>
        <div className="img-block">
          <img src={WindPrice} alt="window drawing" />
        </div>
      </div>
    </div>
  );
}
