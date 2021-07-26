import React from 'react';
import './App.css';
import FarmersContainer from './containers/FarmersContainer'
import CustomersContainer from './containers/CustomersContainer'
import ProductsContainer from './containers/ProductsContainer';


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <CustomersContainer />
      <FarmersContainer />
      <ProductsContainer />
      
    </div>
    );
  }
}

export default App;


