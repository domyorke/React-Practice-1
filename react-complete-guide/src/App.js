import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!</p>
      <Person />
      </div>
    );
  }
}

// App is exported here and imported into the index.js file which renders to the ReactDOM
export default App;
