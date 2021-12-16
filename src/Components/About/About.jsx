import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="AboutMain">
      <div class="contentWrapper">
        <h1 id = "whyUs">Почему мы?</h1>
        <div class="mainBlocks">
          <div class="iconBlocks">
            <i class="fas fa-tools whyUsIcon"></i>
          </div>
          <div class="textBlocks">
            <h2>Ремонт в день обращения</h2>
            <p>
              Мастер приедет к вам в течение дня и оперативно устранит
              неисправность
            </p>
          </div>
        </div>
        <div class="warrantyBlock mainBlocks">
          <div class="iconBlocks">
            <i class="fas fa-user-shield whyUsIcon"></i>
          </div>
          <div class="textBlocks">
            <h2>Высокое качество</h2>
            <p>
              Для ремонта окон используются только качественные материалы, от
              проверенных поставщиков.
            </p>
          </div>
        </div>
        <div class="downpayBlock mainBlocks">
          <div class="iconBlocks">
            <i class="fas fa-credit-card whyUsIcon"></i>
          </div>
          <div class="textBlocks">
            <h2>Работаем без предоплаты</h2>
            <p>
              Даже в случае сложного ремонта оплата производится только по факту
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
