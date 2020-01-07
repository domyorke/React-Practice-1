// A component is just a function that returns JSX
// ES6 best practice for using react

import React from 'react';


const Person = (props) => {
    return (
    <div>
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    )
};

export default Person