import React, { Component } from 'react';
import Calculator from './Components/Calculator';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Calculator />   
      </div>
    );
  }
}

export default App;
