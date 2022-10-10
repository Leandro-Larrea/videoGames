import React, { useState } from "react";
import { useEffect } from "react";
import style from "../styles/post.module.css"
import { useDispatch, useSelector } from "react-redux";
import { connect} from "react-redux";
import { getGenres } from "../redux/actions";
import { postCharacter } from "../redux/actions";
import { getPlatforms } from "../redux/actions";
import ok from "../images/ok-icon.png";
import kirby from "../images/loader2.gif"


export default function Post(){
              
    const dispatch = useDispatch()
    
    const platforms = useSelector(state => state.platforms)
    
    useEffect(()=>{
        console.log("aca va el use efect de post")
        dispatch(getGenres())
        dispatch(getPlatforms())
       
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

    useEffect( ()=> {
        validation()
        console.log(error)
    },[info])

    const [error, setError] = useState({
 
    })

    function handleChange(e){

       
        if(e.target.name === "genres"){
            info.genres.includes(e.target.value)?
            setInfo({...info,
                    genres: info.genres.filter(a => a !== e.target.value)}):
                    setInfo({...info,
                        genres: info.genres.concat(e.target.value)})
                        return    
        }
        if(e.target.name === "platforms"){
            info.platforms.includes(e.target.value)?
            setInfo({...info,
                    platforms: info.platforms.filter(a => a !== e.target.value)}):
                    setInfo({...info,
                        platforms: info.platforms.concat(e.target.value)})
                        return    
        }
         setInfo({...info,
         [e.target.name] : e.target.value})
    }
        

    const create = (e)=>{
        e.preventDefault()
        if(Object.values(error).filter(e => e !== null).length) return alert("Field each field but image")
       let a = dispatch(postCharacter(info))
        setInfo({
            name: "",
            genres:[],
            description:"",
            releaseDate:"",
            rating:0,
            platforms:[]
        })
        alert("The game has been created succesfully")
        document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
        console.log("a", a)
    }

    function validation(){
        let e = {}
        info.description.length < 50 || info.description[0] !== info.description[0].toUpperCase()? e.description = "(Description must be longer than 50 characters and begin with capitalize)" : e.description = null;
        !info.genres.length? e.genres ="(U must mark 1 genre at least)": e.genres = null;
        info.platforms.length? e.platforms =  null : e.platforms = "(U must mark 1 platform at least)";
        info.rating < 1 || info.rating > 5? e.rating = "(Grater than 0 lower than 5)" : e.rating = null;   
        !/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(info.releaseDate)? e.releaseDate = "(Use the way yyyy/mm/dd)": e.releaseDate =  null;
        !/(\w*)\b([A-Z][a-z]\w*)\b(\w*)/.test(info.name) || info.name.length > 50? e.name = "(First letter must be capitalize)": e.name =  null;
        setError({...e})

        // let n = name
        // switch (n) {
        //     case "name":
        //         if(!n || value[0] !== value[0].toUpperCase()) setError({...error, [n] : "The first letter must be capitalize"})  
        //         else{ setError({...error, [n]:null}) }
        //         break;
        //     case "platforms":
        //         if(!info.platforms.length) {console.log(info.platforms)
        //          setError({...error, [n] : "U must select one platform at least"})}
        //         else setError({...error, [n]:null})
        //         break;
        //     case "genres":
        //         if(!info.genres.length) setError({...error, [n] : "Pls select one genre at least "})
        //         else setError({...error, [n]:null})
        //         break;
        //     case "rating":
        //         if(value <= 0 || value > 5) setError({...error, [n] : "Insert a rating between 0 and 5"})
        //         else setError({...error, [n]:null})
        //         break;
        //     case "releaseDate":
        //         if(!n) setError({...error, [n] : "Ppl wanna know when the fucking game was created"})
        //         else setError({...error, [n]:null})
        //         break;
        //     default:
        //         break;
        // }
    }

    if(genresData.length && platforms.length){
       return (<main className={style.main}>
                    <form className={style.form} onSubmit={create}>
                        <div className={style.item}>
                            <label  htmlFor="name"  className={style.label}>Name:</label>
                            <p className={error.name?style.errorT:style.ok}>{error.name}</p>
                                <input name="name" className={error.name? style.error:style.input} id="name"type="text" onChange={handleChange} value={info.name}>
                                </input>      
                        </div>
                        <div className={style.item}>
                            <label className={style.label}>Released:</label>
                            <p className={error.releaseDate?style.errorT:style.ok}>{error.releaseDate}</p>
                                <input name="releaseDate" onChange={handleChange} className={error.releaseDate? style.error:style.input} type="text" value={info.releaseDate}>
                                </input>

                        </div>
                        <div className={style.item}>
                            <label className={style.label}>Rating:</label>
                            <p className={error.rating?style.errorT:style.ok}>{error.rating}</p>
                                <input name="rating" onChange={handleChange} className={error.rating? style.error:style.input} type="number" value={info.rating}>
                                </input>

                        </div>
                        <div className={style.item}>
                            <label className={style.label}>Image (optional):</label>
                                <input name="image" onChange={handleChange} className={style.inputOptional} type="text">
                                </input>

                        </div>
                        <div className={style.itemDescription}>
                            <label className={style.label}>Description:</label>
                            <p className={error.description?style.errorT:style.ok}>{error.description}</p>
                                <textarea value={info.description} name="description" onChange={handleChange} className={error.description?style.error:style.input}>
                                </textarea>
                        </div>
                        <div  className={style.h2Container}>
                        <h2>Genres</h2>
                        <p className={error.genres?style.errorT:style.ok}>{error.genres}</p>
                        <img src={ok} className={error.genres? style.errorImg: style.ok}></img>
                        </div>
                        <div className={style.checksContainer}>
                            {genresData.length && genresData.map((g,i) => {
                                return(
                                    <div key={g.id} className={style.itemCheck}>
                                        <label key={g.name + 1} className={style.checkLabel} htmlFor={g.name}>{g.name}</label>
                                        <input onChange={handleChange} name ="genres" type="checkbox" value={g.name} className={style.check} id={g.name} key={i}></input>
                                    </div>
                                        )   
                                    }
                                )
                            }
                        </div> 
                        <div  className={style.h2Container}>
                        <h2>Platforms</h2>
                        <p className={error.platforms?style.errorT:style.ok}>{error.platforms}</p>
                        <img src={ok} className={error.platforms? style.errorImg: style.ok}></img>
                        </div>
                        <div className={style.checksContainer}>
                            {platforms.length && platforms.map((g,i) => {
                                return(
                                    <div key={g} className={style.itemCheck}>
                                        <label key={g + 1} className={style.checkLabel} htmlFor={g}>{g}</label>
                                        <input onClick={handleChange} name ="platforms" type="checkbox" value={g} className={style.check} id={g} key={i}></input>
                                    </div>
                                        )   
                                    }
                                )
                            }
                        </div>
                        <button className={style.submit}>Post Game</button>
                    </form>
            
                </main>)}
        return <div className={style.loaderContainer}><img className={style.loader} src={kirby}></img></div>
    }




