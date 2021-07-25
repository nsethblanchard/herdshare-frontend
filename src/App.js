import React from 'react';
import './App.css';
import FarmersContainer from './containers/FarmersContainer'
import CustomersContainer from './containers/CustomersContainer'


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <FarmersContainer />
      <CustomersContainer />  
    </div>
    );
  }
}

export default App;


