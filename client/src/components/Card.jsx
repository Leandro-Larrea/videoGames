import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/card.module.css"

export function Card(props){
    return (
        <div className={style.main}>
            <div>{props.name} </div>
            <div><img src={props.img} alt="Notimg"></img></div>
            <div>{props.platforms?.map(e => <div>{e}</div>)}</div>  
        </div>
    )
}