import React, { Component } from 'react';
import './App.css';
import Number from "./components/Number";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Number size={5} split={3} />
        </header>
      </div>
    );
  }
}

export default App;
