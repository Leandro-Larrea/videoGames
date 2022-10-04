import {SORT_ABC, SORT_RATING,SEARCH_NAME, FILTER, CLEAN, GET_ALL, GET_GAME_DETAIL,
         GET_GAME_NAME, GET_GENRES, GET_ID} from "./actions.js"

const initialState ={
    games:[],
    filterGames:[],
    gameDetail:{},
    gameName:[],
    genres:[]
}

export function rootReducer(state = initialState, action){
    switch (action.type){           
        case GET_ALL:      
            return{
                ...state,
                games: action.payload,
                filterGames: action.payload
        }
        case FILTER:
            return{
                ...state,
                filterGames: action.payload === "Todos"?state.games:state.games.filter(e => e.genres.includes(action.payload))
            }
        case GET_GAME_DETAIL:       
            return{        
                ...state,
                gameDetail: action.payload
        }
        case GET_GAME_NAME:
            return{
                ...state,
                filterGames: action.payload
        }
        case CLEAN:
            console.log("cleaning???")
            return{
                ...state,
                gameDetail: {}
            }
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
                }
     
        case SORT_RATING:
            console.log(state.filterGames)
            let a = action.payload === "ascending"?state.filterGames.sort((a,b) => a.rating - b.rating):
            state.filterGames.sort((a,b) => b.rating - a.rating)
            return{
                ...state,
                filterGames: a.splice(0)
            }
            
        case SEARCH_NAME:{     
            return{
                ...state,
                filterGames: state.games.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
            }    }
        default: 
            return state
    }
}