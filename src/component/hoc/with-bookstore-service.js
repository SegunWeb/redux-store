import React from "react";
import {BookServiceConsumer} from "../book-service-context/BookServiceContext";

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
       return (
           <BookServiceConsumer>
               {
                   (bookstoreService) => {
                      return  (<Wrapped {...props} bookstoreService={bookstoreService} />)
                   }
               }
           </BookServiceConsumer>
       )
    }
};

export default withBookstoreService;