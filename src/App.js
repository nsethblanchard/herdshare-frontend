import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchCarts } from './actions/fetchCarts';

class App extends React.Component {

  componentDidMount() {
   this.props.fetchCarts({type: 'FETCH_CARTS', payload: {quantity: 1}})
  }


  render() {
  return (
    <div className="App">
      App
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
export default connect(null, {fetchCarts})(App);

// if you are only updating store and don't need the initial state information, you can use "null" as the first argument
// gives us access to this.props.fetchCarts()
