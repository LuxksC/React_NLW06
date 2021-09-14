import React from 'react'; //allows to use React
import ReactDOM from 'react-dom'; //import ReactDOM method that allows JS to communicate with HTML.
import App from './App'; //import component App from App.tsx
import './services/firebase'//import firebase credentials from the folder services

ReactDOM.render( //link the HTML code in the App component to the HTML in the index.HTML file 
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

