import React from 'react';
import './App.css';

import CustomersContainer from './containers/CustomersContainer'


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <CustomersContainer />  
    </div>
    );
  }
}

export default App;


