import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/card.module.css"

export function Card(props){
    return (<NavLink style={{textDecoration:"none"}} to={`/data/${props.id}`}>
        <div className={style.cardHover}>
        <div className={style.card}>
            
            <div className={style.name}>{props.name}</div>
            <div className={style.imgContainer}>
                <img className={style.img} src={props.img} alt="Notimg"></img>
            </div>
            <div className={style.platforms}>{props.platforms?.map((e,i) => <div key={i}>{e}</div>)}</div>  
        </div>
        </div>
        </NavLink>)
}