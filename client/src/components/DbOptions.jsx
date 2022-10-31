import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGame, filterDb, getAll } from "../redux/actions";
import { Card } from "./Card";
import style from "../styles/dbOptions.module.css";
import loader2 from "../images/loader2.gif";
import { NavLink } from "react-router-dom";

export const DbOptions = ()=>{

    
    const dispatch = useDispatch()
    const todos = useSelector (state => state.games)
    const games = useSelector(state => state.filterGames)
    
    useEffect(()=>{
        console.log("useEfect",games)
        if(!todos.length){
            dispatch(getAll())
            dispatch(filterDb("db"))
            }
            console.log("1234")
            dispatch(filterDb("db"))
    },[todos])

    const byeBye = (e)=>{
        e.preventDefault()
        dispatch(deleteGame(e.target.value))
    }

    if(games.length === 0){
        return <div className={style.loaderContainer}> <img className={style.loader} src={loader2}></img></div>}
        return (
        <div>
            <main className={style.home}>
                {games?.map(e =>  
                    <div key={e.name} className={style.container}>
                        <Card className={style.card}
                        key={e.id}
                        name={e.name}
                        img={e.img}
                        genres={e.genres}
                        id={e.id}
                    />
                    <div className={style.buttonContainer}>
                        <NavLink to={`/post/${e.id}`}>
                        <button className={style.button1} value={e.id}>Edit</button>
                        </NavLink>
                        <button className={style.button2} value={e.id} onClick={byeBye}>Delete</button>
                    </div>
                </div>
                )}
            </main>
        </div>
    )   
}