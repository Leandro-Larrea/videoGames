import React, { useState } from "react";
import { useEffect } from "react";
import style from "../styles/post.module.css"
import { useDispatch, useSelector } from "react-redux";
import { connect} from "react-redux";
import { getGenres } from "../redux/actions";

export default function Post(){
              
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getGenres())
    },[])
    const genresData = useSelector((state)=> state.genres)
    const [info, setInfo] = useState({
        name: "",
        genres:[],
        description:"",
        releaseDate:"",
        rating:0,
        platforms:[]
    }) 
    if(genresData.length > 0){
   console.log("wiii",genresData)
       return (<main className={style.main}>
            <form className={style.form}>
                <div className={style.item}>
                    <label  htmlFor="name" className={style.label}>Name:</label>
                        <input className={style.input} id="name"type="text">
                        </input>      
                </div>
                <div className={style.item}>
                    <label className={style.label}>Released data:</label>
                        <input className={style.input} type="text">
                        </input>
                    
                </div>
                <div className={style.item}>
                    <label className={style.label}>Rating</label>
                        <input className={style.input} type="number">
                        </input>
                    
                </div>
                <div className={style.item}>
                    <label className={style.label}>
                        <input className={style.input} type="text">
                        </input>
                    </label>
                </div>
                <div className={style.checksContainer}>
                    {genresData.length && genresData.map((g,i) => {
                        return(
                            <div key={g.id} className={style.itemCheck}>
                                <label key={g.name + 1} className={style.checkLabel} htmlFor={g.name}>{g.name}</label>
                                <input type="checkbox" value={g.name} className={style.check} id={g.name} key={i}></input>
                            </div>
                                )   
                            }
                        )
                    }
                </div>
                
            </form>
            
        </main>)}
        return <h1>esperando</h1>
    }




