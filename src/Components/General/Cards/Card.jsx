import React, {useContext} from "react";
import CartContext from "../../../context/cart/CartContext";
import './Card.css'


function ProductCard({product}) {
    const { addToCart } = useContext(CartContext)
    return (
        <div className='productCard__wrapper' id ={product._id}>
            <div>
                <img className='productCard__img' src = {product.image} alt = '' />
                <h4>{product.name}</h4>
                <div className='productCard__price'>
                    <h5>От {product.price}</h5>
                </div>
                <button 
				className='ProductCard__button' 
				onClick={() => addToCart(product)}>
				Добавить в крозину
			  </button>
            </div>
        </div>
    )
}

export default ProductCard