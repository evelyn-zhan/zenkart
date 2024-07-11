import React from 'react';
import { Link } from 'react-router-dom';

import EmptyCart from '../components/EmptyCart';
import CartShopList from '../components/CartShopList';

function CartPage({ shops, cartProducts, onDelete, onDeleteShop, onDeleteAll, onCheck, onCheckShop, onCheckAll, onAddQuantity, onSubtractQuantity, onAddNote }) {
    let checkoutAmount = 0;

    for(let i = 0; i < cartProducts.length; i++) {
        const product = cartProducts[i];
        if(product.checked === true) {
            checkoutAmount += product.quantity * (Math.round((100 - product.discount_percentage) * product.price) / 100);
        }
    }

    checkoutAmount = Math.round(checkoutAmount * 100) / 100;

    return (
        <div className="cart">
            <h2 className="cart__title">
                <i className="ri-shopping-cart-2-line"></i>
                <span>My Cart</span>
            </h2>

            { cartProducts.length > 0 && 
                <Link to="/" className="cart__shop-back">
                    <i className="ri-arrow-left-s-line"></i>
                    <span>Continue shopping</span>
                </Link>
            }
            
            {
                cartProducts.length === 0
                    ? <EmptyCart />
                    :
                    <div className="cart__container">
                        <CartShopList shops={shops} products={cartProducts} onDelete={onDelete} onDeleteShop={onDeleteShop} onDeleteAll={onDeleteAll} onCheck={onCheck} onCheckShop={onCheckShop} onCheckAll={onCheckAll} onAddQuantity={onAddQuantity} onSubtractQuantity={onSubtractQuantity} onAddNote={onAddNote} />
                        <div className="cart__checkout">
                            <span className="cart__checkout-title">Cart Summary</span>
                            <div className="cart__checkout-amount">
                                <span>Total</span>
                                <span style={{ fontWeight: '800', color: 'var(--primary-color)' }}>$ {checkoutAmount}</span>
                            </div>
                            <button className="cart__checkout-button">Checkout</button>
                        </div>
                    </div>
            }
        </div>
    );
}

export default CartPage;