import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import style from "../styles/nav.module.css";
import joystick from "../images/console.png";
import { SearchBar } from "./SearchBar";
import {Menu} from "./Menu.jsx";
import { useState } from "react";
import { Filter } from "./Filter";

export function Nav(props){
    
   const [a, setA] = useState(0)
   const [b, setB] = useState(0)

    const ff = (e)=>{
        b === 0? setB(1): setB(0)
        console.log(1)
    }

   function f(e){
    a === 0? setA(1): setA(0)
     
   }
    return(
        <div className={style.navHover}>
            <nav className={style.nav}>
                <img className={style.logo} src={joystick}/>
                <SearchBar match = {props.match}/>
                
                    {/* <button>Home</button>
                    <button>About</button> */}
                    
                    <div className={style.buttons}>
                        <div className={style.position}>
                            <div className={b === 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                                <div onClick={ff} className={style.sortText}>
                                    <a className={b === 1 && style.aOn}>Filter</a>
                                </div>
                            </div>
                            <Filter b={b} match={props.match}></Filter>
                        </div>
                        <div className={style.position}>
                            <div className={a === 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                                <div onClick={f} className={style.sortText}>
                                    <a className={a === 1 && style.aOn}>Sort</a>
                                </div>
                                <Menu a={a} match={props.match}></Menu>
                            </div>
                        </div>
                    <NavLink className={style.sortContainer} to="/post">                     
                            <a className={style.navButton}> Post Game </a>
                    </NavLink >
                    <NavLink className={style.sortContainer} to="/menu">
                        <a className={style.navButton}> Home </a>
                    </NavLink >
                </div>
            </nav>
        </div>
    )
}