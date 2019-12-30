import React from 'react';
import BookList from "../book-list/BookList";
import Cart from "../cart/Cart";


const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <BookList/>
            <Cart/>
        </div>
    )
};

export default HomePage;