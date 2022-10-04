import React, { useState } from "react";
import style from "../styles/searchBar.module.css"
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getGameName, getGenres } from "../redux/actions";
import { genresFilter } from "../redux/actions";
import { search } from "../redux/actions";

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
        dispatch(search(text))
        // dispatch(getGameName(text))
    }

    return(
            <div className={style.main}>
                <div className={style.selectContainer}>
                    <select className={style.select} onChange={filtrar}>
                        <option className={style.option}>Todos</option>
                        {
                            genres?.map((e,i)=> <option key={i} value ={e.name}className={style.option}>{e.name}</option>)
                        }
                    </select>
                </div>
                <form className={style.form} onSubmit={Search}>
                    <input type="text" onChange={handleText} className={style.input}></input>
                    <button type="submit" className={style.button}>Search</button>
                </form>
            </div>
            )
}