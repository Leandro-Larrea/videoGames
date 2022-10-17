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

   
    return (<div className={props.b === 1? style.hover: style.hoverOff}>
                <div className={style.container}>
                    <div className={style.selectContainer}>
                        
                        <button className={style.option}  onClick={filtrar} value="Todos">Todos</button>
                                {
                                genres?.map((e,i)=> <button key={i} onClick={filtrar} value ={e.name}className={style.option}>{e.name}</button>)
                                }
                        
                    </div>
                    <div className={style.selectContainer}>
                        <select className={style.select} onChange={filtrarDb}>
                            <option className={style.option} value="todos">Todos</option>
                            <option className={style.option} value="db">Posted</option>
                            <option className={style.option} value="api">Api</option>
                        </select>
                    </div>
                </div>
            </div>
            )
}