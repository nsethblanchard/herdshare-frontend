import React from 'react';
import Nav from './Nav';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home';
// import ProductsList from './components/ProductsList';
// import CustomersList from './components/CustomersList';


class App extends React.Component {
  render() {
    return (
      <div className="App">
            <Nav />
            <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;


