import React from 'react';

import ProductCard from './ProductCard';

function ProductList({ shop, products, onLike, onAddToCart}) {
    const shopProducts = products.filter(product => product.shop.name === shop);

    return (
        <div className="shop">
            <div className="shop__title">
                <i className="ri-store-3-line"></i>
                <span>{shop}</span>
            </div>
            <div className="product-card-list">
                {
                    shopProducts.map(product => {
                        return <ProductCard key={product.id} {...product} onLike={onLike} onAddToCart={onAddToCart} />
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;