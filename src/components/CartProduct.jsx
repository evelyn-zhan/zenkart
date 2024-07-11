import React, { useState } from 'react';

import AddNote from './AddNote';

function CartProduct({ id, price, title, description, images, discount_percentage, quantity, checked, note, onDelete, onCheck, onAddQuantity, onSubtractQuantity, onAddNote }) {
    const onDeleteHandler = () => { onDelete(id); };
    const onCheckHandler = () => { onCheck(id); };
    const onAddQuantityHandler = () => { onAddQuantity(id); };
    const onSubtractQuantityHandler = () => { onSubtractQuantity(id); };

    const [ noteArea, setNoteArea ] = useState(false);

    return (
        <div className="cart__shop-container">
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
                        <span className="cart__product-note">Note: {note === '' ? '-' : note}</span>
                    </div>
                    <div className="cart__product-qty-n-buttons">
                        <div className="cart__product-buttons">
                            {
                                note === ''
                                ? <i className="ri-sticky-note-add-line" onClick={() => setNoteArea(true)}></i>
                                : <i class="ri-edit-2-line" onClick={() => setNoteArea(true)}></i>
                            }
                            <i className="ri-delete-bin-6-line" onClick={onDeleteHandler}></i>
                        </div>
                        <div className="cart__product-qty">
                            <button className="cart__product-subtract-qty" onClick={onSubtractQuantityHandler}>-</button>
                            <span className="cart__product-qty-text">{quantity}</span>
                            <button className="cart__product-add-qty" onClick={onAddQuantityHandler}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <AddNote id={id} note={note} trigger={noteArea} setTrigger={setNoteArea} onAddNote={onAddNote} />
        </div>
    )
}

export default CartProduct;