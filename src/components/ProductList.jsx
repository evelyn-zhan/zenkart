import React from 'react';

import ProductCard from './ProductCard';

function ProductList({ shop, products }) {
    const shopProducts = products.filter(product => product.shop.name === shop);

    return (
        <div className="shop">
            <h3 className="shop__title">{shop}</h3>
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