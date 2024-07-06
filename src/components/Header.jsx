import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <i className="ri-shopping-bag-4-fill"></i>
                <h1>Zenkart</h1>
            </div>

            <div className="header__menu">
                <Link className="link" to="/">
                    <h3 className="header__menu-item">
                        <i className="ri-archive-2-line"></i>
                        <span>Products</span>
                    </h3>
                </Link>

                <Link className="link" to="/cart">
                    <h3 className="header__menu-item">
                        <i className="ri-shopping-cart-2-line"></i>
                        <span>My Cart</span>
                    </h3>
                </Link>
            </div>
        </div>
    )
}

export default Header;