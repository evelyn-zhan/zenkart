import React from 'react';

function CartProduct({ id, price, title, description, images, discount_percentage, checked, note, onCheck }) {
    const onCheckHandler = () => {
        onCheck(id);
    }

    return (
        <div className="cart__shop-product">
            <input
                type="checkbox" name="product-checkbox" id={`${id}-checkbox`}
                className="cart__product-checkbox"
                checked={checked}
                onChange={onCheckHandler}
            />
            <img src={images[0]} alt="product-image" className="cart__product-image" />
            <div className="cart__product-info">
                <span className="cart__product-title">{title}</span>
                <span className="cart__product-description">{description}</span>
                <span className="cart__product-note">{note}</span>
            </div>
            
        </div>
    )
}

export default CartProduct;