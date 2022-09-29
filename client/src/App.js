import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import { Home } from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Home/>
    </div>
  );
}

export default App;
