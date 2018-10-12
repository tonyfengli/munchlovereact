import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import businessReducer from './store/reducers/businessSearch';
import authReducer from './store/reducers/auth';
import thunk from 'redux-thunk';
import history from './history';


const rootReducer = combineReducers({
    businessSearch: businessReducer,
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store = {store}>
        <Router history={history}>
            <App/> 
        </Router> 
    </Provider>
); 

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

