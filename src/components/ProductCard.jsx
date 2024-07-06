import React from 'react';

function ProductCard({ price, title, description, images, discount_percentage, inCart, quantity }) {
    return (
        <div className="product-card">
            <img src={images[1]} alt="product image" className="product-card__image" />
            <div className="product-card__text">
                <div className="product-card__info">
                    <span className="product-card__title">{title}</span>
                    <span className="product-card__description">{description}</span>
                </div>
                {
                    discount_percentage > 0
                        ?
                            <span className="product-card__price">
                                <b>$ {price}</b>
                            </span>
                        :
                            <span className="product-card__price">
                                <b><s>$ {price}</s></b>
                            </span>
                }
            </div>
            
        </div>
    );
}

export default ProductCard;