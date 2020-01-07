import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Dominic', age: 27 },
      { name: 'Thomas', age: 51 },
      { name: 'Peri', age: 25 }
    ],
    otherState: 'some other value'
  }

  ageOneYearHandler = () => {
    // console.log('Was Clicked!')
    // Don't do this: this.state.persons[0].name = 'Dominic';
    this.setState({persons: [
      {name: 'Dominic', age: 28 },
      {name: 'Thomas', age: 52 },
      {name: 'Peri', age: 26 },
    ]})
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!</p>
      <button onClick={this.ageOneYearHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
  }
}

// App is exported here and imported into the index.js file which renders to the ReactDOM
export default App;
