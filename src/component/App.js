import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage, CartPage} from '../component/pages'

import './App.css';


const App = () => {

    return (
        <main role='main' className="container">
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>

    )
};

export default App;