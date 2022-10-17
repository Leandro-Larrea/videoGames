import React, { useState } from "react";
import style from "../styles/searchBar.module.css"
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getGameName, getGenres } from "../redux/actions";
import { genresFilter } from "../redux/actions";
import { filterDb } from "../redux/actions";
import { matchPath, useHistory } from "react-router-dom";

export function SearchBar(props){

    const genres = useSelector(state=> state.genres)
    const dispatch = useDispatch()
    const history = useHistory()

    const [text, setText] = useState("");

    function handleText(e){
        e.preventDefault()
        setText(e.target.value);
    }
    
    useEffect(()=>{
        dispatch(getGenres())
    },[])
    
    const filtrar = (e)=>{
        e.preventDefault()
        props.match.path !== "/menu" && history.push("/menu")
        let genre = e.target.value
        dispatch(genresFilter(genre))
    }
   
    const Search = (e) =>{
        e.preventDefault()
        if(text.length === 0) return 
         dispatch(getGameName(text))
         props.match.path !== "/menu" && history.push("/menu")
    }

    function filtrarDb(e){
        props.match.path !== "/menu" && history.push("/menu")
        let t = e.target.value
        dispatch(filterDb(t))
    }

    return(
            <div className={style.main}>
              
                <form className={style.form} onSubmit={Search}>
                    <input type="text" onChange={handleText} className={style.input}></input>
                    <button type="submit" className={style.button}>Search</button>
                </form>
            </div>
            )
}