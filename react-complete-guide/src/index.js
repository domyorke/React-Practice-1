import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Here is where the App.js is rendered to the 'root' ID in the HTML. 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
