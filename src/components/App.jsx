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
                    inCart: true,
                    quantity: product.quantity + 1
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

    function onDeleteHandler(id) {
        const updatedProducts = products.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    inCart: false,
                    quantity: 0,
                    checked: false,
                    note: ''
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    function onDeleteShopHandler(shop) {
        const updatedProducts = products.map(product => {
            if(product.shop.name === shop) {
                return {
                    ...product,
                    inCart: false,
                    quantity: 0,
                    checked: false,
                    note: ''
                }
            }
            return product;
        })

        setProducts(updatedProducts);
    }

    function onDeleteAllHandler() {
        const updatedProducts = products.map(product => {
            if(product.inCart) {
                return {
                    ...product,
                    inCart: false,
                    quantity: 0,
                    checked: false,
                    note: ''
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    function onCheckHandler(id) {
        const updatedProducts = products.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    checked: !product.checked
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    function onCheckShopHandler(shop, value) {
        const updatedProducts = products.map(product => {
            if(product.shop.name === shop && product.inCart) {
                return {
                    ...product,
                    checked: value
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    function onCheckAllHandler(value) {
        const updatedProducts = products.map(product => {
            if(product.inCart) {
                return {
                    ...product,
                    checked: value
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    function onAddQuantityHandler(id) {
        const updatedProducts = products.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    function onSubtractQuantityHandler(id) {
        const updatedProducts = products.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    function onAddNoteHandler(id, note) {
        const updatedProducts = products.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    note: note
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
                <Route path="*" element={<HomePage shops={shops} products={products} onLike={onLikeHandler} onAddToCart={onAddToCartHandler} />} />
                <Route path="/" element={<HomePage shops={shops} products={products} onLike={onLikeHandler} onAddToCart={onAddToCartHandler} />} />
                <Route path="/cart" element={<CartPage shops={shops} cartProducts={cartProducts} onDelete={onDeleteHandler} onDeleteShop={onDeleteShopHandler} onDeleteAll={onDeleteAllHandler} onCheck={onCheckHandler} onCheckShop={onCheckShopHandler} onCheckAll={onCheckAllHandler} onAddQuantity={onAddQuantityHandler} onSubtractQuantity={onSubtractQuantityHandler} onAddNote={onAddNoteHandler} />} />
            </Routes>
        </>
    );
}

export default App;