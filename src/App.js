import React from 'react';
import Nav from './components/layout/Nav';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import FarmersContainer from './containers/FarmersContainer'
import CustomersContainer from './containers/CustomersContainer'
import ProductsContainer from './containers/ProductsContainer';
import ProductsList from './components/ProductsList';



class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Nav />
          Here we will put "Welcome" and then maybe map through all farmers and have a user choose who they are...
          <Switch>
            <Route path='/products' component={ProductsList} />
            

          </Switch>        
      </div>
    </Router>
    );
  }
}

export default App;


