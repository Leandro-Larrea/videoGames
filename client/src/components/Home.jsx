import React, { useState } from "react";
import {Card} from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../redux/actions";
import style from "../styles/home.module.css";
import loader2 from "../images/loader2.gif";
import { genresFilter } from "../redux/actions";
import { Pages } from "./Pages.jsx";
import bowser from "../images/marioSad.png"

export function Home(props){
  
    const dispatch = useDispatch();
    const games = useSelector(state => state.filterGames);

    useEffect(()=>{
        console.log("useEffect andando")
        dispatch(getAll())
        dispatch(genresFilter("Todos"))
    },[]);

    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamePerPage] = useState(15)

    if(games === "Game not found.") return (<div className={style.notFoundContainer}>
      <h1>{games}</h1><img className={style.notFound} src={bowser}>
        </img>
        </div>)

    const lastGame = currentPage * gamesPerPage
    const firstGame = lastGame - gamesPerPage
    const renderGames = games.slice(firstGame, lastGame)
    const fcUpdate = (x)=>{
      setCurrentPage(x)
    }
        console.log(games)
        if(games.length === 0){
        return <div className={style.loaderContainer}> <img className={style.loader} src={loader2}></img></div>}
        return (<div>
        <Pages juegos={games.length} juegosPorPagina={gamesPerPage} actualizar={fcUpdate}/>
        <main className={style.home}>
        
          {renderGames?.map(e =>  
          <Card key={e.id}
          name={e.name}
          img={e.img}
          genres={e.genres}
          id={e.id}
          />
          )}
              
        </main>
        </div>
      )    
    }
