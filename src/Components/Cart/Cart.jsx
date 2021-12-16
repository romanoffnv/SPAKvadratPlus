
import { useContext } from "react";
import "./Cart.css";
import CartContext from "../../context/cart/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  
  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Корзина пуста</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
