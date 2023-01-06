import React, { useEffect, useState } from "react";
import { sortByRating, sortByAbc } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import style from "../styles/menu.module.css"
import { useHistory } from "react-router-dom";

export function Menu(props){

const dispatch = useDispatch()
const history = useHistory()
const [sortRating, setSortRating] = useState(0)
const [sortAbc, setSortAbc] = useState(0)


useEffect(()=>{
    setSortRating(0)
    setSortAbc(0)
},[props.a])

function fcSortRating(){ 
    sortRating === 0? setSortRating(1): setSortRating(0)
}

function fcSortAbc(){
    sortAbc === 0? setSortAbc(1): setSortAbc(0)
}

const sort = (e)=>{
    let t = e.target.value
    if(t !== "Rating"){
        dispatch(sortByRating(t)) 
        props.match.path !== "/menu" && history.push("/menu")
    }
}

const abc = (e)=>{
    let t = e.target.value
    if(t !== "ABC"){
        console.log("hasta aca si", t)
    dispatch(sortByAbc(t))}
    props.match.path !== "/menu" && history.push("/menu")
}

return (<div className={props.a === 1?style.hover: style.hoverOff}>
            <div className={style.container} >
                <div className={style.selectContainer}>
                <div className={sortRating === 0?style.relleno: style.rellenoOn}  onClick={fcSortRating}>
                    <a className={style.sortText}>Rating</a>
                    </div>
                        <div className={sortRating === 0?style.sorts: style.sortsOn}>
                             <button value="descending" className={style.button} onClick={sort}>Best</button>
                             <button value="ascending" className={style.button} onClick={sort}>Worst</button>
                           
                        </div>
                </div>
                <div className={style.selectContainer}>
                    <div className={sortAbc === 0?style.relleno: style.rellenoOn}  onClick={fcSortAbc}>
                    <a className={style.sortText}>ABC</a>
                    </div>
                    <div className={sortAbc === 0?style.sorts: style.sortsOn}>
                        <button value="normal" className={style.button} onClick={abc}>A-Z</button>
                        <button value="reverse" className={style.button} onClick={abc}>Z-A</button>
                    </div>
                </div>
            </div>
        </div>
        )
}