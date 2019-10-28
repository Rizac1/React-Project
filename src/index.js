import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // This is importing the App component from App.jsx

ReactDOM.render(<App string={'this is a prop\'s text'} number={4} />, document.getElementById('root'));
