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
                <div className="product-card__price">
                    <i class="ri-price-tag-3-line"></i>
                    <span className="product-card__price-amount">$ {Math.round((100 - discount_percentage) * price) / 100}</span>
                    {
                        discount_percentage > 0 && 
                        <span className="product-card__price-before-discount">
                            <small><s>$ {price}</s></small>
                        </span>
                    }
                </div>
            </div>
            
        </div>
    );
}

export default ProductCard;