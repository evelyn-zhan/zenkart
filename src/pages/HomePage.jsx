import React, { useState, useEffect } from 'react';

import { getProducts } from '../utils/data';
import ProductList from '../components/ProductList';

function HomePage() {
    const [ products, setProducts ] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        if(savedProducts){
            return JSON.parse(savedProducts);
        }
        return getProducts();
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    });

    let shops = [];
    
    for(let i = 0; i < products.length; i++) {
        if(!shops.includes(products[i].shop.name)) {
            shops.push(products[i].shop.name);
        }
    }

    console.log(shops)

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
                        return <ProductList key={shop} shop={shop} products={products} />
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;