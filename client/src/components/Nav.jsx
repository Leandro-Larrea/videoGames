import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/nav.module.css";
import joystick from "../images/console.png";
import { SearchBar } from "./SearchBar";
import {Menu} from "./Menu.jsx"

export function Nav(){
    return(
        <div className={style.navHover}>
            <nav className={style.nav}>
                <img className={style.logo} src={joystick}/>
                <SearchBar/>
                <div className={style.buttons}>
                    {/* <button>Home</button>
                    <button>About</button> */}
                    <Menu></Menu>
                    <div className={style.buttonHover}>
                        <button className={style.button}><NavLink className={style.link} to="/post">Post Game</NavLink ></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}