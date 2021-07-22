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

// way of accessing or seeing our state in store and directing which particular pieces we want- passed to the connect as first argument

const mapStateToProps = (state) => {
  return {
    carts: state.accounts
  }
}

// used as second argument and sends (dispatches) the necessary action to update our state in redux
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


// using this action creator, we can skip the mapDispatchToProps function and just directly pass in the action creator and update store
export default App;

// if you are only updating store and don't need the initial state information, you can use "null" as the first argument
// gives us access to this.props.fetchCarts()

// using connect function returns an action object by implicitly calling store.dispatch({type: 'FETCH_CARTS', payload: {quantity: 1}}) "or whatever action object"
// then sends that action to the store, by way of the reducer.  

