import React from "react";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../../../context/cart/CartContext";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const { cartItems, showHideCart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    if (window.innerWidth <= 590) {
      if (menuOpen) {
        document.querySelector(".loginBlock").style.height = "0";
        document.querySelector(".menuItems").style.height = "0";
      }
      if (menuOpen === true) {
        document.querySelector(".loginBlock").style.height = "fit-content";
      }
    }

    if (window.innerWidth > 590) {
      if (menuOpen) {
        document.querySelector(".loginBlock").style.height = "0";
        document.querySelector(".menuItems").style.height = "70px";
      }
      if (menuOpen === true && window.innerWidth > 590) {
        document.querySelector(".menuItems").style.height = "70px";
        document.querySelector(".loginBlock").style.height = "fit-content";
      }
    }
  }, [menuOpen]);

  return (
    <div>
      <ul className="itemsList">
        <li className="items loginItem">
          <i class="fas fa-user-circle"></i>
          <Link to="#" onClick={() => setMenuOpen(true)}>
            Войти
          </Link>
        </li>
        <li className="items">
          <Link to="/About" onClick={() => setMenuOpen(false)}>
            О нас
          </Link>
        </li>
        <li className="items">
          <Link to="/Repairs" onClick={() => setMenuOpen(false)}>
            Ремонт
          </Link>
        </li>
        <li className="items">
          <Link to="/Services" onClick={() => setMenuOpen(false)}>
            Услуги
          </Link>
        </li>
        <li className="items cart__icon">
          <i class="fas fa-shopping-cart" area-hidden="true" onClick={showHideCart}/>
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
