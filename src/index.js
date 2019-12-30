import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './component/App'
import ErrorBoundry from "./component/error-boundry/ErrorBoundry";
import BookstoreService from "./service/bookstore-service";
import {BookServiceProvider} from "./component/book-service-context/BookServiceContext";
import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
            <ErrorBoundry>
                <BookServiceProvider value={bookstoreService}>
                    <Router>
                        <App/>
                    </Router>
                </BookServiceProvider>
            </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));


