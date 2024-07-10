import React from 'react';

import CartShop from './CartShop';

function CartShopList({ shops, products, onDelete, onDeleteShop, onDeleteAll, onCheck, onCheckShop, onCheckAll, onAddQuantity, onSubtractQuantity }) {
    const onCheckAllHandler = () => {
        onCheckAll(!products.every(product => product.checked));
    }

    const onDeleteAllHandler = () => {
        onDeleteAll();
    }

    return (
        <div className="cart__shop-list">
            <div className="cart__shop-list-total">
                <input
                    type="checkbox" name="shop-checkbox" id="shop-checkbox" className="cart__shop-list-total-checkbox"
                    checked={products.every(product => product.checked)}
                    onChange={onCheckAllHandler}
                />
                <div className="cart__shop-list-qty-n-delete">
                    <span>Select All ({products.length})</span>
                    <div className="cart__shop-list-delete" onClick={onDeleteAllHandler}>Remove All ({products.length})</div>
                </div>
            </div>
            {
                shops.map(shop => {
                    return <CartShop key={shop} shop={shop} products={products.filter(product => product.shop.name === shop)} onDelete={onDelete} onDeleteShop={onDeleteShop} onDeleteAll={onDeleteAll} onCheck={onCheck} onCheckShop={onCheckShop} onAddQuantity={onAddQuantity} onSubtractQuantity={onSubtractQuantity} />
                })
            }
        </div>
    )
}

export default CartShopList;