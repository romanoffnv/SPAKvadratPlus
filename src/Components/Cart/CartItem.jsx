
import React from 'react'
import {useContext} from 'react'
import './CartItem.css'
import CartContext from '../../context/cart/CartContext'
function CartItem({item}) {
    const { removeItem } = useContext(CartContext)
    return (
        <li className='CartItem__item liAsList'>
            <img src = {item.image} alt = ''/>
            <div>
                {item.name} 
            </div>
            <button className = 'CartItem__button' onClick = {() => removeItem(item._id)}>Удалить</button>
        </li>
    )
}
export default CartItem
