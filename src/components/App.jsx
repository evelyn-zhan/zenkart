import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    );
}

export default App;