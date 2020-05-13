import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/venueReducer'
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    
, document.getElementById('root'));