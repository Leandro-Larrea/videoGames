import React from "react";
import style from "../styles/pages.module.css"

export function Pages({juegos, juegosPorPagina, actualizar}){
    const arrayPages =[];
    let q = Math.ceil(juegos/juegosPorPagina)
    for(let i = 1; i <= q; i++){
        arrayPages.push(i)
    }
    return (<div>
             <section className={style.container}>
                 {arrayPages && arrayPages.map((e,i)=>{
                 return <button className={style.button} key={i} onClick={()=> actualizar(e)}>{e}</button>}
                 )}
             </section>
            </div> )
}