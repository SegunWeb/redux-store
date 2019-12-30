import React, {Component} from 'react';
import {connect} from 'react-redux'
import withBookstoreService from '../hoc/with-bookstore-service'
import {fetchBooks, bookAddedToCart } from "../../actions";
import compose from "../../util/index";
import Spiner from "../spiner/Spiner";
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import BookList from "./BookList";

import {bindActionCreators} from "redux";

import './BookList.css'


class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if(loading) {
            return <Spiner />
        }
        if(error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({ bookList: {books, loading, error}}) => {
    return {books, loading, error}
};
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    // return {
    //     fetchBooks: fetchBooks(bookstoreService, dispatch),
    //     onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    // }
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart,
    }, dispatch)
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))
(BookListContainer);

