import React from "react";
import style from "../styles/searchBar.module.css"

export function SearchBar(){
    return(
    <form className={style.form}>
        <input type="text" className={style.input}></input>
        <button type="submit" className={style.button}>Search</button>
    </form>)
}