import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getId } from "../redux/actions";
import { clean } from "../redux/actions";
import style from "../styles/data.module.css"
import kirby from "../images/loader2.gif"

export function Data(props){
    
    const id = props.match.params.id;
    const dispatch = useDispatch()
    console.log(id)

    useEffect(()=>{     
        dispatch(getId(id))
        return ()=> dispatch(clean())     
    },[]);

    const detail = useSelector(state => state.gameDetail)
    console.log(detail)
     if(!detail.img){return <div className={style.loaderContainer}><img className={style.loader} src={kirby}></img></div>}   
return (

    <div>
        <div className={style.imgContainer}>
        <h1 className={style.title}>{detail.name}</h1>
            <img className={style.img} src={detail.img}></img>
        <div className={style.description}>{detail.description}</div>                  
        </div>
        <section className={style.data}>
            <div className={style.platforms}>
                <p className={style.text}>Avaible on:</p>
                <div className={style.platformsContainer}>
                    {detail.platforms?.map((e,i) =>{return <p className={style.text} key={i}>{e}</p>})}
                </div>
            </div>
            <div className={style.genres}>
                {detail.genres?.map((e,i) =>{return <p className={style.text} key={i}>{e}</p>})}
            </div>
            <div>
                <p className={style.text}>{detail.releaseDate}</p>
                <p className={style.text}>{detail.rating}</p>
            </div>
        </section>
    </div>

) }


