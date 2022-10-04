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

export const getAll = () => dispatch =>
fetch("http://localhost:3001/videogames")
.then(answer => answer.json())
.then(a => { 
    dispatch({type: GET_ALL, payload: a["ahi_va_el_json"]})
})

export const getGameName = (name) => dispatch =>
fetch(`http://localhost:3001/videogames?name=${name}`)
.then(answer => answer.json())
.then(a => { console.log(a["ahi_va_el_name"])
    dispatch({type: GET_GAME_NAME, payload: a["ahi_va_el_name"]})
})

export const getId = (id) => (dispatch) =>{
    console.log("action")  
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
    console.log("al action si llegamos")
    dispatch({type: SORT_RATING, payload: t})      
}

export const clean = ()=> (dispatch) =>{
    dispatch({type: CLEAN})
}

// - [ ] __GET /videogames__:
// - Obtener un listado de los videojuegos
// - Debe devolver solo los datos necesarios para la ruta principal
// - [ ] __GET /videogames?name="..."__:
// - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// - Si no existe ningún videojuego mostrar un mensaje adecuado
// - [ ] __GET /videogame/{idVideogame}__:
// - Obtener el detalle de un videojuego en particular
// - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// - Incluir los géneros asociados
// - [ ] __POST /videogames__:
// - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// - Crea un videojuego en la base de datos, relacionado a sus géneros.
// - [ ] __GET /genres__:
// - Obtener todos los tipos de géneros de videojuegos posibles
// - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí