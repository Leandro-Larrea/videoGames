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
                    
                    <NavLink className={style.link} to="/post">
                        <button className={style.button}>
                            Post Game
                        </button>
                    </NavLink >
                </div>
            </nav>
        </div>
    )
}