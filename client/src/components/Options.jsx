import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/options.module.css"

export const Options = (props) =>{
    
    const pantallita = ()=>{
        console.log(window.innerWidth)
    }

    return (<div className={props.b === 1 && window.innerWidth < 1202? style.hover: style.hoverOff}>
        <div className={style.container}>
            <div className={style.selectContainer}>
            <NavLink className={style.sortContainer} to="/menu">   
                <button className={style.option}>Home</button>
            </NavLink>
            <NavLink className={style.sortContainer} to="/Post">
                <button className={style.option}>Post Games</button>
            </NavLink>
            <NavLink className={style.sortContainer} to="/DbOptions">
                <button className={style.option}>Db Options</button>
            </NavLink>
            </div>
        </div>
    </div> 
    )        
}
