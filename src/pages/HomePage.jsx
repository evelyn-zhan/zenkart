import React from 'react';

import ProductList from '../components/ProductList';

function HomePage({ shops, products, onLike, onAddToCart }) {
    return (
        <div className="home">
            <div className="banner">
                <span className="banner__text">
                    Grab your favorite products now! <br />
                    Find what you love, all in one place.
                </span>
            </div>

            <div className="product-list">
                <h2 className="product-list__title">Shops and Products</h2>
                {
                    shops.map(shop => {
                        return <ProductList key={shop} shop={shop} products={products} onLike={onLike} onAddToCart={onAddToCart} />
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;