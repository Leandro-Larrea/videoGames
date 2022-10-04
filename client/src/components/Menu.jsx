import React from "react";
import { sortByRating } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";



export function Menu(){

const dispatch = useDispatch()

const sort = (e)=>{
    e.preventDefault()
    let t = e.target.value
    
    if(t !== "Rating"){
        console.log(t)
        dispatch(sortByRating(t))}
}

return (<div>
            <select onChange={sort}>
                <option value="Rating">Rating</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            <select onChange={sort}>
                <option>Default</option>
                <option>Normal</option>
                <option>Reverse</option>
            </select>
        </div>
        )

}