import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/products')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  render() {
  return (
    <div className="App">
      App
    </div>
  );
  }
}

export default App;
