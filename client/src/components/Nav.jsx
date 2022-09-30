import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/nav.module.css";
import joystick from "../images/console.png";
import { SearchBar } from "./SearchBar";

export function Nav(){
    return(
        <nav className={style.nav}>
            <img className={style.logo} src={joystick}/>
            <SearchBar/>
            <div className={style.buttons}>
                <button>Home</button>
                <button>About</button>
                <button>Post Game</button>
            </div>
        </nav>
    )
}