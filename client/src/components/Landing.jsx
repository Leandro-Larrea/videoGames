import React from "react";
import style from "../styles/landing.module.css"
import { Component } from "react";
import img from "../images/knight.jpg"
import { Link } from "react-router-dom";


export class Landing extends Component{
    render(){
        return(
        <main className={style.main}>
            <div className={style.imgContainer}>
                <img className={style.img} src={img}/>        
                <Link className={style.Link} to={"/menu"}><button className={style.button}>Go In </button></Link>             
            </div>
        </main>)
    }
}
