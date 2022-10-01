import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getId } from "../redux/actions";
import { clean } from "../redux/actions";
import style from "../styles/data.module.css"

export function Data(props){

    
    const id = props.match.params.id;
    const dispatch = useDispatch()
    console.log(id)

    useEffect(()=>{     
        dispatch(getId(id))
        return ()=> dispatch(clean())     
    },[]);

    const detail = useSelector(state => state.gameDetail)
        console.log(detail)
        
return (
    <div>
           
            <div className={style.text}>{detail.description}</div>                  
        
        <img src={detail.img}></img>
    </div>
) }


