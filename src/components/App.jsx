import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getProducts } from '../utils/data';
import Header from './Header';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

function App() {
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

    function onAddToCartHandler(id) {
        const updatedProducts = products.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    inCart: true
                }
            }
            return product;
        });
        
        setProducts(updatedProducts);
    }

    function onLikeHandler(id) {
        const updatedProducts = products.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    liked: !product.liked
                }
            }
            return product;
        });
    
        setProducts(updatedProducts);
    }

    const cartProducts = products.filter(product => product.inCart);

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage shops={shops} products={products} onLike={onLikeHandler} onAddToCart={onAddToCartHandler} />} />
                <Route path="/cart" element={<CartPage cartProducts={cartProducts} />} />
            </Routes>
        </>
    );
}

export default App;