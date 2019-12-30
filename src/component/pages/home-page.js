import React from 'react';
import {BookListContainer} from "../book-list";
import Cart from "../cart/Cart";


const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <BookListContainer />
            <Cart/>
        </div>
    )
};

export default HomePage;