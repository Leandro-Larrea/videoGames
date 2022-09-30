import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getId } from "../redux/actions";
import { clean } from "../redux/actions";
import style from "../styles/data.module.css"
export function Data(props){
    
    console.log(3)
    const id = props.match.params.id;
    const detail = useSelector(state => state.gameDetail)
    const dispatch = useDispatch()
  
    useEffect(()=>{ 
        console.log("useefect")     
        dispatch(getId(id))
        
    },[]);
return (
       <p className={style.text}>{detail.description}</p>
) 
}
