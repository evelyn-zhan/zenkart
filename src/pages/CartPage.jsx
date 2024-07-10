import React from 'react';

import EmptyCart from '../components/EmptyCart';

function CartPage({ cartProducts }) {
    return (
        <div className="cart">
            <h2 className="cart__title">
                <i className="ri-shopping-cart-2-line"></i>
                <span>My Cart</span>
            </h2>

            {/* <Link to="/" className="cart__back">
                <i className="ri-arrow-left-s-line"></i>
                <span>Continue shopping</span>
            </Link> */}

            {
                cartProducts.length === 0
                    ? <EmptyCart />
                    : <span>tes</span>
            }
        </div>
    );
}

export default CartPage;