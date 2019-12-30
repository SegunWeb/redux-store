import React from 'react';
import './App.css';
import withBookstoreService from './hoc/with-bookstore-service'

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());

    return (
        <div>Hello</div>
    )
};

export default withBookstoreService()(App);