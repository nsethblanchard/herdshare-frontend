import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchCarts } from './actions/fetchCarts';
import CartsContainer from './containers/CartsContainer';

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <CartsContainer />
      
    </div>
  );
  }
}

export default App;


