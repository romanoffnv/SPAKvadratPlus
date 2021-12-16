import React from "react";
import GotoCard from './GotoCard'
import "./Footer.css";
// import { REPDATA, SERVICESDATA } from "../Cards/CardData/CardsData";
import { REPDATA } from "../Cards/CardData/RepCardData"
import { SERVDATA } from "../Cards/CardData/ServCardData"
import { Link } from "react-router-dom";


const Footer = () => {

  const repairsAll = REPDATA.slice(2,6);
  const servicesAll = SERVDATA.slice(0,6);

  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footerMain">
          <div className="social" id="contacts">
            <div className="networks">
              <a
                href="https://www.instagram.com/kvadratnv_plus/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://vk.com/id684303543"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <i className="fab fa-vk"></i>{" "}
              </a>
              <a href="https://api.whatsapp.com/send?phone=+79028548538&text=Здравствуйте!">
                <i className="fab fa-whatsapp-square"></i>
              </a>
            </div>
            <p>Контакты:</p>
            <a href="mailto:kvadratplusnv@gmail.com">
              <i className="fas fa-envelope"></i> kvadratplusnv@gmail.com
            </a>
            <a href="tel:+79028548538">
              <i className="fas fa-phone-square"></i> +7(902)854-85-38
            </a>
          </div>
          <div className="fixes">
            <h3 className="footerH3">Неисправности</h3>
            <GotoCard data={repairsAll} path = "Repairs" />
          </div>
          <div className="services">
            <h3 className="footerH3">Услуги</h3>
            <GotoCard data={servicesAll} path = "Services" />
          </div>
          <div className="group">
            <div className="aboutUs">
              <h3 className="footerH3">О нас</h3>
              <ul className="servicesList">
                <li>
                  <Link 
                    to ="/About"
                    onClick={() => {
                      let whyUs = document.getElementById('whyUs');
                      whyUs.scrollIntoView({behavior: 'smooth'})
                    }
                      
                    }>Почему мы?</Link>
                </li>
              </ul>
            </div>
            <div className="payment">
              <h3 className="footerH3 paywaysH3">Способы оплаты</h3>
              <div className="payways">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fas fa-money-bill-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          © КвадратПлюс 2021 | Ремонт окон и утепление балконов г. Нижневартовск
        </p>
      </div>
    </div>
  );
}

export default Footer;