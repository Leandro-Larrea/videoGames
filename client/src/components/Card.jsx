import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/card.module.css"
import optional from "../images/kirby.gif"
import { ImageLoader } from "./imageLoader";

export function Card(props){
    return (
    <NavLink style={{textDecoration:"none"}} to={`/data/${props.id}`}>
        <div className={style.cardHover}>
        <div className={style.card}>
                <div className={style.imgContainer}>
                    {/* <img className={style.img} src={props.img? props.img: optional} alt="Notimg"></img> */}
                    <ImageLoader src={props.img} alt={"notImg"}/>
                </div>
            <div className={style.name}>{props.name}</div>
            <p className={style.rating}>{`${props.rating}`.split("").slice(0,3).join("")}⭐</p>
            <div className={style.genres}>{props.genres?.map((e,i) => <div key={i}>{e}</div>)}</div>  
        </div>
        </div>
    </NavLink>)
}