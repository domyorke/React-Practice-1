import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Dominic', age: 27 },
      { name: 'Thomas', age: 51 },
      { name: 'Peri', age: 25 }
    ],
    otherState: 'some other value'
  })

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const ageOneYearHandler = () => {
    // console.log('Was Clicked!')
    // Don't do this: this.state.persons[0].name = 'Dominic';
    // setState is a react method that allows us to update the state
    // changing state and props 
    setPersonsState({
      persons: [
        { name: 'Dominic', age: 28 },
        { name: 'Thom', age: 52 },
        { name: 'Peri', age: 26 },
      ]
    })
  }


  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!</p>
      <button onClick={ageOneYearHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

    </div>
  );

}

// App is exported here and imported into the index.js file which renders to the ReactDOM
export default app;

