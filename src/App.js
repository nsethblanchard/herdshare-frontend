import React from 'react';
import Nav from './Nav';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import ProductsContainer from './containers/ProductsContainer';
import CustomersContainer from './containers/CustomersContainer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ProductsContainer} />
              <Route exact path="/customers" component={CustomersContainer} />
            </Switch>
      </div>
    );
  }
}

export default App;


