import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Remember to import router!!
import { BrowserRouter as Router } from 'react-router-dom';

//Wrap the app component in router 
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
