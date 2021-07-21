import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchCarts } from './actions/fetchCarts';

class App extends React.Component {

  componentDidMount() {
   this.props.fetchCarts({type: 'FETCH_Carts', payload: {quantity: 1}})
  }


  render() {
  return (
    <div className="App">
      App
    </div>
  );
  }
}


export default connect(null, {fetchCarts})(App);
