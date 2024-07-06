import React from 'react';
import { Routes, Route } from 'react-router-dom';

import getProducts from '../utils/data';
import Header from './Header';
import HomePage from '../pages/HomePage';

function App() {
    console.log(getProducts())
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;