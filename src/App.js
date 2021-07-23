import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchCarts } from './actions/fetchCarts';
import CartsContainer from './containers/CartsContainer';
import CustomersContainer from './containers/CustomersContainer'

class App extends React.Component {

  render() {
  return (
    <div className="App">
      {/* <CartsContainer /> */}
      <CustomersContainer />
    </div>
  );
  }
}

export default App;


