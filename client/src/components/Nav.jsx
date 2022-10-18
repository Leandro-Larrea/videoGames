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
   const [c, setC] = useState(0)

   const fff = (e)=>{
    c === 0? setC(1): setC(0)
}

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
                <div className={style.margin}>
                    <img className={style.logo} src={joystick}/>
                </div>
                <SearchBar match = {props.match}/>
                <div className={style.sortFilters}>
                    <div className={style.position}>
                        <div onClick={ff} className={b === 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                            <div  className={style.sortText}>
                                <a className={b === 1? style.aOn: style.aOff}>Genres Filter</a>
                            </div>
                        </div>
                        <Filter b={b} match={props.match} genres={true}></Filter>
                    </div>
                    <div className={style.position}>
                        <div onClick={fff} className={c=== 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                            <div  className={style.sortText}>
                                <a className={c === 1? style.aOn: style.aOff}>Origin Filter</a>
                            </div>
                        </div>
                        <Filter c={c} match={props.match} origin={true}></Filter>
                    </div>
                    
                    <div className={style.position}>
                            <div onClick={f} className={a === 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                                <div  className={style.sortText}>
                                    <a className={a === 1? style.aOn: style.aOff}>Sort</a>
                                </div>
                            </div>
                            <Menu a={a} match={props.match}></Menu>
                        </div>
                        <div className={style.position}>
                            <div className={style.sortContainerFilter}>
                                <div  className={style.sortText}>
                                    <NavLink className={style.sortContainer} to="/post">                     
                                        <a className={style.navButton}> Post Game </a>
                                    </NavLink >
                                </div>
                            </div>
                        </div>
                </div>
                
                    {/* <button>Home</button>
                    <button>About</button> */}
                    
                    <div className={style.buttons}>
                        
                    <div className={style.margin}>   
                    <NavLink className={style.sortContainer} to="/menu">
                        <a className={style.navButton}> Home </a>
                    </NavLink >
                    </div>
                </div>
            </nav>
        </div>
    )
}