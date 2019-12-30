import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const App = ({numItems, total}) => {

    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${total})
                </div>
            </Link>
        </header>

    )
};

export default App;