import React from 'react';
import Nav from './Nav';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home';
import ProductsList from './components/ProductsList';
import CustomersList from './components/CustomersList';


class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Nav />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/customers' component={CustomersList} />
            <Route exact path='/products' component={ProductsList} />

          </Switch>        
      </div>
    </Router>
    );
  }
}

export default App;


