import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";




function App() {
  return (
    <div className="App">
     <Route exact path= "/" component={Home}/>
     <Route path= "/avengers" component={AvengersList}/>
    </div>
  );
}

export default App;
