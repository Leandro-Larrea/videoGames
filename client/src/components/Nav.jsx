import React from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import style from "../styles/nav.module.css";
import joystick from "../images/console.png";
import { SearchBar } from "./SearchBar";
import {Menu} from "./Menu.jsx";
import { useState } from "react";
import { Filter } from "./Filter";
import { Options } from "./Options";
import { getAll } from "../redux/actions";
import { useDispatch } from "react-redux";

export function Nav(props){
    
   const [a, setA] = useState(0)
   const [b, setB] = useState(0)
   const [c, setC] = useState(0)
   const [d, setD] = useState(0)
   const [fq, setFq] = useState(0)

   const fQuery = (e)=>{
    fq === 0? setFq(1): setFq(0)
}

   const ffff = (e)=>{
    d === 0? setD(1): setD(0)
}

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

   const autoOff = (e) =>{
    if(fq === 1 && window.innerWidth > 1092) setFq(0)
   }

   const history = useHistory()
   const dispatch = useDispatch()
   function go(e){
    if(props.match.path === "/DbOptions") {
        
        history.push("/menu")
        return
    }
    props.match.path !== "/menu" && history.push("/menu")
   }
   window.addEventListener("resize",autoOff)

    return(
        <div className={style.navHover}>
            <nav className={style.nav}>
                <div className={style.margin}>
                    <div className={style.marginQuery}>
                        <div className={style.rellenoBar}></div>
                        <img className={style.logo} src={joystick}/>
                        <SearchBar match = {props.match}/>
                    </div>
                </div>
                <div className={style.sortFilters}> 
                    <div className={style.position}>
                        <div onClick={ff} className={b === 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                            <div  className={style.sortText}>
                                <a className={b === 1? style.aOn: style.aOff}>Genres Filter</a>
                            </div>
                        </div>
                        <Filter  b={b} match={props.match} genres={true}></Filter>
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
                        <div onClick={ffff} className={d=== 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                            <div  className={style.sortText}>
                                <a className={d === 1? style.aOn: style.aOff}>Platforms Filter</a>
                            </div>
                        </div>
                        <Filter d={d} match={props.match} platforms={true}></Filter>
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
                        <NavLink className={style.sortContainer} to="/DbOptions"> 
                        <div className={style.sortContainerFilter}>
                            <div  className={style.sortText}>                    
                                    <p className={style.navButton}>Db Options</p>  
                            </div> 
                        </div>
                        </NavLink >
                    </div>
                    <div className={style.hamburger}>
                        <div onClick={fQuery} className={fq=== 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                            <div  className={style.sortText}>
                                <a className={fq === 1? style.aOn: style.aOff}>Options</a>
                            </div>
                        </div>
                        <Options b={fq} match={props.match} platforms={true}></Options>
                    </div>
                    <div className={style.position}>
                        <NavLink className={style.sortContainer} to="/post"> 
                        <div className={style.sortContainerFilter}>
                            <div  className={style.sortText}>                    
                                    <p className={style.navButton}> Post Game </p>  
                            </div> 
                        </div>
                        </NavLink >
                    </div>
                    <div className={style.position}> 
                        <div className={style.sortContainerFilter} onClick={go}>
                            <div  className={style.sortText}>
                                <p className={style.navButton}> Home </p>     
                            </div>
                        </div>
                    </div>                                      
                </div>  
            </nav>
        </div>
    )
}