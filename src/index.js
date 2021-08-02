import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import customerReducer from './reducers/customerReducer'
import farmerReducer from './reducers/farmerReducer'
import productReducer from './reducers/productReducer'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  customer: customerReducer,
  farmer: farmerReducer,
  product: productReducer,
})

let theStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={theStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

