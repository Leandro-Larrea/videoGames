import React from "react";
import {Card} from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../redux/actions"

export function Home(props){
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games);
    useEffect(()=>{
        dispatch(getAll())
    },[]);

    
        console.log(games)
        return (<div>
         { games.length?.map(e => <h1>{e.name}</h1>) }
        </div>
        ) 
    
}
