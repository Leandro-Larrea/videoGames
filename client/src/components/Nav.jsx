import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/nav.module.css";
import joystick from "../images/console.png";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import {Menu} from "./Menu.jsx"

export function Nav(){
    return(
        <nav className={style.nav}>
            <img className={style.logo} src={joystick}/>
            <SearchBar/>
            <div className={style.buttons}>
                <button>Home</button>
                <button>About</button>
                <Menu></Menu>
                <Link to="/post"><button>Post Game</button></Link>
            </div>
        </nav>
    )
}