import React from 'react';

import ProductCard from './ProductCard';

function ProductList({ shop, products }) {
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
                        return <ProductCard key={product.id} {...product} />
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;