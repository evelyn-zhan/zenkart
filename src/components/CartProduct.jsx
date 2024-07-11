import React from 'react';
import { Link } from 'react-router-dom';

function CartProduct({ id, price, title, description, images, discount_percentage, quantity, checked, note, onDelete, onCheck, onAddQuantity, onSubtractQuantity }) {
    const onDeleteHandler = () => { onDelete(id); };
    const onCheckHandler = () => { onCheck(id); };
    const onAddQuantityHandler = () => { onAddQuantity(id); };
    const onSubtractQuantityHandler = () => { onSubtractQuantity(id); };

    return (
        <div className="cart__shop-product">
            <input
                type="checkbox" name="product-checkbox" id={`${id}-checkbox`}
                className="cart__product-checkbox"
                checked={checked}
                onChange={onCheckHandler}
            />
            <img src={images} alt="product-image" className="cart__product-image" />
            <div className="cart__product-all-info">
                <div className="cart__product-info">
                    <span className="cart__product-title">{title}</span>
                    <span className="cart__product-description">{description}</span>
                    <div className="cart__product-price">
                        <span className="cart__product-price-amount">$ {Math.round((100 - discount_percentage) * price) / 100}</span>
                        <span className="cart__product-price-before-discount"><small><s>$ {price}</s></small></span>
                    </div>
                    <span className="cart__product-note">Note: {note}</span>
                </div>
                <div className="cart__product-qty-n-buttons">
                    <div className="cart__product-buttons">
                        <i className="ri-sticky-note-add-line"></i>
                        <i className="ri-delete-bin-6-line cart__product-delete-bin" onClick={onDeleteHandler}></i>
                    </div>
                    <div className="cart__product-qty">
                        <button className="cart__product-subtract-qty" onClick={onSubtractQuantityHandler}>-</button>
                        <span className="cart__product-qty-text">{quantity}</span>
                        <button className="cart__product-add-qty" onClick={onAddQuantityHandler}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;