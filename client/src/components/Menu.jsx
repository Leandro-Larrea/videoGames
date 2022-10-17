import React from "react";
import { sortByRating, sortByAbc } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import style from "../styles/menu.module.css"
import { useHistory } from "react-router-dom";

export function Menu(props){

const dispatch = useDispatch()
const history = useHistory()

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
    dispatch(sortByAbc(t))}
    props.match.path !== "/menu" && history.push("/menu")
}

return (<div className={props.a === 1?style.hover: style.hoverOff}>
            <div className={style.container} >
                    <a value="Rating">Rating</a>
                        <div className={style.sorts}>
                            <button value="ascending">Ascending</button>
                            <button value="descending">Descending</button>
                        </div>
                    <a>Abc</a>
                        <div className={style.sorts}>
                            <button value="normal">A-Z</button>
                            <button value="reverse">Z-A</button>
                        </div>
            </div>
        </div>
        )

}