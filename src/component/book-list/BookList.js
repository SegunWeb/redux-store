import React, {Component} from 'react';
import BookListItem from "../book-list-item/BookListItem";
import {connect} from 'react-redux'
import withBookstoreService from '../hoc/with-bookstore-service'
import {fetchBooks } from "../../actions";
import compose from "../../util/index";
import Spiner from "../spiner/Spiner";
import ErrorIndicator from '../error-indicator/ErrorIndicator';

import './BookList.css'


class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
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
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))
    (BookList);

