import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchCarts } from './actions/fetchCarts';
import { fetchCustomers } from './actions/fetchCustomers';
import CartsContainer from './containers/CartsContainer';
import CustomersContainer from './containers/CustomersContainer'
import CustomersList from './components/CustomersList';

class App extends React.Component {

  render() {
  return (
    <div className="App">
      {/* <CartsContainer /> */}
      <CustomersContainer />
      <CustomersList customers={this.fetchCustomers}/>
    </div>
  );
  }
}

export default App;


