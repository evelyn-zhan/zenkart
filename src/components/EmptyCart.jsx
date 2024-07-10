import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div className="cart__empty">
            <img src="/images/empty-cart.png" alt="empty-cart" className="cart__empty-image" />
            <span className="cart__empty-text">There is nothing in your cart...</span>
            <Link to="/" className="cart__empty-button">
                <i className="ri-shopping-bag-4-fill"></i>
                <span>Shop Now</span>
            </Link>
       </div>
    )
}

export default EmptyCart;