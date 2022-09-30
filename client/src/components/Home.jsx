import React from "react";
import {Card} from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../redux/actions"
import style from "../styles/home.module.css"
import kirby from "../images/kirby.gif"

export function Home(props){
  console.log(3)
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games);
    useEffect(()=>{
        dispatch(getAll())
    },[]);

        console.log(games.ahi_va_el_json)
        if(games.length < 100){return <div className={style.loaderContainer}> <img className={style.loader} src={kirby}></img></div>}
        return (<main className={style.home}>
          { games.ahi_va_el_json?.map(e => <Card key={e.id} 
          name={e.name}
          img={e.img}
          platforms={e.platforms}
          id={e.id}
          />
          
          ) } 
          
        </main>
        ) 
    
}
