import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getGameName, getGenres } from "../redux/actions";
import { genresFilter } from "../redux/actions";
import { filterDb } from "../redux/actions";
import { matchPath, useHistory } from "react-router-dom";
import style from "../styles/Filter.module.css"

export function Filter(props){

    const genres = useSelector(state=> state.genres)
    const dispatch = useDispatch()
    const history = useHistory()

 useEffect(()=>{
    console.log("aca si")
        dispatch(getGenres())
    },[])

const filtrar = (e)=>{
        e.preventDefault()
        props.match.path !== "/menu" && history.push("/menu")
        let genre = e.target.value
        dispatch(genresFilter(genre))
    }
function filtrarDb(e){
        props.match.path !== "/menu" && history.push("/menu")
        let t = e.target.value
        dispatch(filterDb(t))
    }
    if(props.genres){
    return (<div className={props.b === 1? style.hover: style.hoverOff}>
                <div className={style.container}>
                    <div className={style.selectContainer}>   
                        <button className={style.option}  onClick={filtrar} value="Todos">Todos</button>
                                {
                                genres?.map((e,i)=> <button key={i} onClick={filtrar} value ={e.name}className={style.option}>{e.name}</button>)
                                }
                    </div>
                </div>
            </div> 
            )        
        }
    if(props.origin){
        return(
            <div className={props.c === 1? style.hoverOrigin: style.hoverOriginOff}>
                <div className={style.container}>
                    <div className={style.selectContainer}>   
                        <button className={style.option} onClick={filtrarDb} value="todos">Todos</button>
                        <button className={style.option} onClick={filtrarDb} value="db">Data base</button>
                        <button className={style.option} onClick={filtrarDb} value="api">Api</button>
                    </div>
                </div>
            </div> 
        )       
    }
}