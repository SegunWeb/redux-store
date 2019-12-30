import React, {Component} from 'react';
import BookListItem from "../book-list-item/BookListItem";
import {connect} from 'react-redux'
import withBookstoreService from '../hoc/with-bookstore-service'
import {booksLoaded, booksRequested, booksError } from "../../actions";
import compose from "../../util/index";
import Spiner from "../spiner/Spiner";
import ErrorIndicator from '../error-indicator/ErrorIndicator';

import './BookList.css'


class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const {books, loading, error} = this.props;

        if(loading) {
            return <Spiner />
        }
        if(error) {
            return <ErrorIndicator />
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return <li key={book.id}><BookListItem book={book} /></li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
};
const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError,
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))
    (BookList);

