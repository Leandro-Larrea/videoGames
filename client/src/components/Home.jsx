import React, { useState } from "react";
import {Card} from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clean, getAll } from "../redux/actions";
import style from "../styles/home.module.css";
import loader2 from "../images/loader2.gif";
import { genresFilter } from "../redux/actions";
import { Pages } from "./Pages.jsx";
import bowser from "../images/marioSad.png"

export function Home(props){
  
    const dispatch = useDispatch();
    const games = useSelector(state => state.filterGames);

    useEffect(()=>{
        if(!games.length){
        dispatch(getAll())
        }
        dispatch(genresFilter("Todos"))
        return ()=> clean("filterGames")
    },[]);

    useEffect(()=>{
      setCurrentPage(1)
    },[games])

    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamePerPage] = useState(15)

     if(games === "Game not found.") return (<div className={style.notFoundContainer}>
      <h1>{games}</h1><img className={style.notFound} src={bowser}>
        </img>
        <button onClick={()=> {
          dispatch(genresFilter("Todos"))
           }} className={style.notFoundButton}>Ok</button>
        </div>)

    const lastGame = currentPage * gamesPerPage
    const firstGame = lastGame - gamesPerPage
    const renderGames = games.slice(firstGame, lastGame)
    const fcUpdate = (x)=>{
      setCurrentPage(x)
    }
         if(games.length === 0){
         return <main className={style.mainContainer}> <img className={style.loader} src={loader2}></img></main>}
        return (<main className={style.mainContainer}>
        <Pages juegos={games.length} juegosPorPagina={gamesPerPage} actualizar={fcUpdate} currentPage={currentPage}/>
          <div className={style.home}>
            {renderGames?.map(e =>  
            <Card key={e.id}
            name={e.name}
            img={e.img}
            genres={e.genres}
            rating={e.rating}
            id={e.id}
          />
          )}
              
        </div>
        </main>
      )    
    }
