import React from 'react';

function ProductCard({ id, price, title, description, images, shop, discount_percentage, inCart, liked, onLike, onAddToCart }) {
    const onAddToCartHandler = () => {
        onAddToCart(id);
    };

    const onLikeHandler = () => {
        onLike(id);
    };

    return (
        <div className="product-card">
            <div className="product-card__like">
                {
                    liked
                    ? <i className="ri-heart-3-fill" style={{ color: 'red' }} onClick={onLikeHandler}></i>
                    : <i className="ri-heart-3-line" onClick={onLikeHandler}></i>
                }
            </div>
            <img src={images} alt="product" className="product-card__image" />
            <div className="product-card__text">
                <div className="product-card__info">
                    <span className="product-card__title">{title}</span>
                    <span className="product-card__description">{description}</span>
                    <span className="product-card__shop-name"><small><b>{shop.name}</b></small></span>
                </div>
                <div className="product-card__price">
                    <i className="ri-price-tag-3-line"></i>
                    <span className="product-card__price-amount">$ {Math.round((100 - discount_percentage) * price) / 100}</span>
                    {
                        discount_percentage > 0 && 
                        <span className="product-card__price-before-discount">
                            <small><s>$ {price}</s></small>
                        </span>
                    }
                </div>
            </div>
            {
                inCart
                ? <button className="product-card__button product-card__button-in-cart">
                    <i className="ri-checkbox-circle-line"></i>
                    <span>Added to Cart</span>
                  </button>
                : <button className="product-card__button" onClick={onAddToCartHandler}>
                    <i className="ri-shopping-cart-2-line"></i>
                    <span>Add to cart</span>
                  </button>
            }
        </div>
    );
}

export default ProductCard;