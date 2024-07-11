import React from 'react';

import CartProduct from './CartProduct';

function CartShop({ shop, products, onDelete, onDeleteShop, onCheck, onCheckShop, onAddQuantity, onSubtractQuantity, onAddNote }) {
    if(products.length === 0) return;

    const onDeleteShopHandler = () => {
        onDeleteShop(shop);
    }

    const onCheckShopHandler = () => {
        onCheckShop(shop, !products.every(product => product.checked));
    }

    return (
        <div className="cart__shop">
            <div className="cart__shop-header">
                <input
                    type="checkbox" name="shop-checkbox" id={`${shop}-checkbox`}
                    className="cart__shop-checkbox"
                    checked={products.every(product => product.checked)}
                    onChange={onCheckShopHandler}
                />
                <div className="cart__shop-title-n-delete">
                    <div className="cart__shop-header-title">
                        <i className="ri-store-3-line"></i>
                        <span>{shop}</span>
                    </div>
                    <div className="cart__shop-delete" onClick={onDeleteShopHandler}>Remove All ({products.length})</div>
                </div>
            </div>
            {
                products.map(product => {
                    return <CartProduct key={product.id} {...product} onDelete={onDelete} onCheck={onCheck} onAddQuantity={onAddQuantity} onSubtractQuantity={onSubtractQuantity} onAddNote={onAddNote} />
                })
            }
        </div>
    )
}

export default CartShop;