import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchCarts } from './actions/fetchCarts';
// import { fetchCustomers } from './actions/fetchCustomers';
// import CartsContainer from './containers/CartsContainer';
import CustomersContainer from './containers/CustomersContainer'


class App extends React.Component {
  
  // async componentDidMount(){
  //   await this.props.fetchCarts()
  // }
  
  
  render() {
    return (
      
      <div className="App">
     
      <CustomersContainer />
      
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {carts: state.carts}
}

export default App;


