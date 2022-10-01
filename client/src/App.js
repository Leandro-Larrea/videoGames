import React from "react";
import {Route} from "react-router-dom";
import { Home } from './components/Home.jsx';
import style from "./styles/app.module.css";
import { Landing } from './components/Landing.jsx';
import { Nav } from "./components/Nav.jsx";
import { Data } from "./components/Data.jsx";
import Post from "./components/Post.jsx";

function App() {
  return (
    <div className={style.app}>
      <Route path="/menu" component={Nav}/>
      <Route exact path="/menu" component={Home}/>
      <Route path="/data/:id" component={Data}/>
      <Route exact path="/" component={Landing}/>
      <Route path="/post" component={Post}/>
      
    </div>
  );
}

export default App;
