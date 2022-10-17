import axios from "axios";
export const GET_ALL = "GET_ALL";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const GET_GAME_NAME = "GET_GAME_NAME";
export const GET_GENRES = "GET_GENRES";
export const GET_ID = "GET_ID";
export const CLEAN = "CLEAN";
export const FILTER = "FILTER";
export const SEARCH_NAME = "SEARCH_NAME";
export const SORT_ABC = "SORT_ABC";
export const SORT_RATING = "SORT_RATING";
export const FILTER_DB = "FILTER_DB";
export const GET_PLATFORMS = "GET_PLATFORMS";

export const getAll = () => dispatch =>
fetch("http://localhost:3001/videogames")
.then(answer => answer.json())
.then(a => { 
    dispatch({type: GET_ALL, payload: a["ahi_va_el_json"]})
})

export function postCharacter(obj){
    return async function (dispatch){
        const r = await axios.post(`http://localhost:3001/videogames`, obj);
        return r
    }
}

export const getGameName = (name) => { return async (dispatch) =>{
return await axios.get(`http://localhost:3001/videogames?name=${name}`)
.then(a =>{
    dispatch({type:GET_GAME_NAME, payload: a.data.ahi_va_el_name})
})
.catch(error => {
                dispatch({type:GET_GAME_NAME, payload: error.response.data.ahi_va_el_name}) 
            }
        )
    }
}

export const getId = (id) => (dispatch) =>{  
return fetch(`http://localhost:3001/videogames/${id}`)
.then(answer => answer.json())
.then(a => {
    
    dispatch({type: GET_GAME_DETAIL, payload: a.data})   
    })
}

export const search = (name) => dispatch =>{
    dispatch({type:SEARCH_NAME, payload: name})
}

export const getGenres = () => dispatch =>{
    fetch("http://localhost:3001/genres")
    .then(eso => eso.json())
    .then(eso2 =>{
        dispatch({type: GET_GENRES, payload:eso2})
    })
}

export const genresFilter = (genre) => dispatch =>{
    dispatch({type: FILTER, payload: genre}) 
}


export const sortByAbc = (t) => dispatch =>{
    dispatch({type: SORT_ABC, payload: t})      
}

export const sortByRating = (t) => dispatch =>{
    dispatch({type: SORT_RATING, payload: t})      
}

export const clean = ()=> (dispatch) =>{
    dispatch({type: CLEAN})
}

 export const filterDb = (t) => dispatch =>{
    return dispatch({type: FILTER_DB, payload: t})}



export const getPlatforms = () => dispatch =>
    fetch("http://localhost:3001/videogames/platforms")
    .then(a => a.json())
    .then(b => {
        dispatch({type: GET_PLATFORMS, payload: b}) 
    })


