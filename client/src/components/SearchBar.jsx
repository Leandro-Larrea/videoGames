import React, { useState } from "react";
import style from "../styles/searchBar.module.css"
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getGameName, getGenres } from "../redux/actions";
import { genresFilter } from "../redux/actions";
import { search } from "../redux/actions";
import { filterDb } from "../redux/actions";

export function SearchBar(){

    const genres = useSelector(state=> state.genres)
    const dispatch = useDispatch()

    const [text, setText] = useState("");

    function handleText(e){
        e.preventDefault()
        setText(e.target.value);
    }

    useEffect(()=>{
        dispatch(getGenres())
    },[])
    console.log(genres)
    const games = useSelector(state => state.filterGames)

    const filtrar = (e)=>{
        e.preventDefault()
        let genre = e.target.value
        console.log(genre)
        dispatch(genresFilter(genre))
        console.log(games)
    }

    const Search = (e) =>{
        e.preventDefault()
        // dispatch(search(text))
        if(text.length === 0) return 
         dispatch(getGameName(text))
    }

    function filtrarDb(e){
        let t = e.target.value
        console.log(t)
        dispatch(filterDb(t))
    }

    return(
            <div className={style.main}>
                <p className={style.sortText}>Filter By</p>
                <div className={style.selectContainer}>
                    <select className={style.select} onChange={filtrar}>
                        <option className={style.option}>Todos</option>
                        {
                            genres?.map((e,i)=> <option key={i} value ={e.name}className={style.option}>{e.name}</option>)
                        }
                    </select>
                </div>
                <div className={style.selectContainer}>
                    <select className={style.select} onChange={filtrarDb}>
                    <option className={style.option} value="todos">Todos</option>
                    <option className={style.option} value="db">Posted</option>
                    <option className={style.option} value="api">Api</option>
                    </select>
                </div>
                <form className={style.form} onSubmit={Search}>
                    <input type="text" onChange={handleText} className={style.input}></input>
                    <button type="submit" className={style.button}>Search</button>
                </form>
            </div>
            )
}