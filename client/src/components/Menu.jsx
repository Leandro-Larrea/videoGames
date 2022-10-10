import React from "react";
import { sortByRating, sortByAbc } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import style from "../styles/menu.module.css"

export function Menu(){

const dispatch = useDispatch()

const sort = (e)=>{
    e.preventDefault()
    let t = e.target.value
    
    if(t !== "Rating"){
        console.log(t)
        dispatch(sortByRating(t))}
}

const abc = (e)=>{
    e.preventDefault()
    let t = e.target.value
    
    if(t !== "ABC"){
        console.log(t)
        dispatch(sortByAbc(t))}
}

return (<div className={style.container}>
            <select onChange={sort}>
                <option value="Rating">Rating</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            <select onChange={abc}>
                <option value="ABC">ABC</option>
                <option value="normal">A-Z</option>
                <option value="reverse">Z-A</option>
            </select>
        </div>
        )

}