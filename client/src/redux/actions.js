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
export const FILTER_PLATFORMS = "FILTER_PLATFORMS"
export const GAME_DELETED = "GAME_DELETED"
export const FAIL_DELETE = "FAIL_DELETE"
export const EDIT_GAME = "EDIT_GAME"
export const UPDATED = "UPDATED"
export const ADD_GAME = "ADD_GAME"

export const getAll = () => dispatch =>
fetch("https://videogames-production-8d45.up.railway.app/videogames")
.then(answer => answer.json())
.then(a => { 
    dispatch({type: GET_ALL, payload: a["ahi_va_el_json"]})
})

export function postCharacter(obj){
    return async function (dispatch){
         await axios.post(`https://videogames-production-8d45.up.railway.app/videogames`, obj)
         .then(a=> { console.log(a.data)
            dispatch({type: ADD_GAME, payload:a.data})
        }).catch(error =>{console.log(error)})
           
        
    }
}

export const getGameName = (name) => { return async (dispatch) =>{
return await axios.get(`https://videogames-production-8d45.up.railway.app/videogames?name=${name}`)
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
return fetch(`https://videogames-production-8d45.up.railway.app/videogames/${id}`)
.then(answer => answer.json())
.then(a => {
    
    dispatch({type: GET_GAME_DETAIL, payload: a.data})   
    })
}

export const search = (name) => dispatch =>{
    dispatch({type:SEARCH_NAME, payload: name})
}

export const getGenres = () => dispatch =>{
    fetch("https://videogames-production-8d45.up.railway.app/genres")
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

export const clean = (a)=> (dispatch) =>{
    dispatch({type: CLEAN, payload: a})
}

export const filterDb = (t) => dispatch =>{
    console.log("holis action")
    return dispatch({type: FILTER_DB, payload: t})}

export const filterPlatforms = (p) => dispatch =>
fetch(`https://videogames-production-8d45.up.railway.app/videogames/platforms/${p}`)
.then(e=> e.json())
.then(a=> { console.log(p, a)
    dispatch({type: FILTER_PLATFORMS, payload: a})
} )

export const getPlatforms = () => dispatch =>
    fetch("https://videogames-production-8d45.up.railway.app/videogames/platforms")
    .then(a => a.json())
    .then(b => {
        dispatch({type: GET_PLATFORMS, payload: b}) 
    })

export const deleteGame = (id) => async (dispatch) =>{
     await axios.delete(`https://videogames-production-8d45.up.railway.app/videogames/${id}`)
     .then(a=> {console.log(a)
        dispatch({type: GAME_DELETED, payload: a.data})
     })
     .catch(error =>{
        dispatch({type: FAIL_DELETE})
     })
    
}

export const updateGame = (id,obj) => async (dispatch) =>{
    await axios.put(`https://videogames-production-8d45.up.railway.app/videogames/${id}`,obj)
    .then(a=> { console.log(a.data)
        dispatch({type: UPDATED, payload:a.data.a})
    })
    .catch(error =>{
        console.log(error)
    })
}

export const editGame = (id) => dispatch => {
    dispatch({type: EDIT_GAME, payload: id})
}


