import React from "react";
import { useEffect } from "react";
import style from "../styles/post.module.css"
import { useDispatch, useSelector } from "react-redux";
import { connect} from "react-redux";
import { getGenres } from "../redux/actions";

export default function Post(){
              
    const dispatch = useDispatch()
    const genres = useSelector((state)=> state.genres)
    useEffect(()=>{
        dispatch(getGenres())
    },[])
    
   console.log(genres)
       return <main className={style.main}>
            <form className={style.form}>
                <item className={style.item}>
                    <label className={style.label}>
                        <input className={style.input} type="text">
                        </input>
                    </label>
                </item>
                <item className={style.item}>
                    <label className={style.label}>
                        <input className={style.input} type="text">
                        </input>
                    </label>
                </item>
                <item className={style.item}>
                    <label className={style.label}>
                        <input className={style.input} type="text">
                        </input>
                    </label>
                </item>
                <item className={style.item}>
                    <label className={style.label}>
                        <input className={style.input} type="text">
                        </input>
                    </label>
                </item>
            </form>
        </main>
    }




