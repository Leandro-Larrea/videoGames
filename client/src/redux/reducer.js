import {SORT_ABC, SORT_RATING,SEARCH_NAME, FILTER, CLEAN, GET_ALL, GET_GAME_DETAIL,
         GET_GAME_NAME, GET_GENRES, FILTER_DB, GET_PLATFORMS,FILTER_PLATFORMS, GAME_DELETED, EDIT_GAME,UPDATED} from "./actions.js"

const initialState ={
    games:[],
    filterGames:[],
    gameDetail:{},
    gameName:[],
    genres:[],
    platforms:[],
    answer:""
}

export function rootReducer(state = initialState, action){
    switch (action.type){           
        case GET_ALL:
            let c = action.payload.map((e) => {
                        if(e.createdAtDb) return {...e, genres: e.genres.map(e => e.name)}
                        return e
                    });      
            return{
                ...state,
                games: [...c],
                filterGames: [...c]
            }
        case FILTER:
            return{
                ...state,
                filterGames: action.payload === "Todos"?state.games:state.games.filter(e => e.genres.includes(action.payload))
            }
        case FILTER_DB:
            let r;
            if (action.payload === "todos") r = state.games
            if (action.payload === "db") r = state.games.filter((e) => {if(e.createdAtDb) return e})
            if (action.payload === "api") r = state.games.filter((e) => {if(!e.createdAtDb) return e})
            return{
                ...state,
                filterGames: [...r]
            }
        case FILTER_PLATFORMS:
            console.log(action.payload)
            return{
                ...state,
                filterGames: action.payload
            }
        case GET_GAME_DETAIL: 
        let e = action.payload 
            if(e.createdAtDb) e = {...e, genres: e.genres.map(e => e.name)}     
            return{        
                ...state,
                gameDetail: e
            }
        case GET_GAME_NAME:
            let s;
            Array.isArray(action.payload)?s= action.payload.map((e) => {
                if(e.createdAtDb) return {...e, genres: e.genres.map(e => e.name)}
                return e
            }): s = action.payload 
            return{
                ...state,
                filterGames: s
        }
        case CLEAN:
            return{
                ...state,
                [action.payload]: []
            }
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
                }
        case GAME_DELETED:
            return {
                ...state,
                games: state.games.filter(e => e.id !== action.payload),
                filterGames: state.filterGames.filter(e => e.id !== action.payload)
            }
     
        case SORT_RATING:
            if(!Array.isArray(state.filterGames)) state.filterGames = [...state.games]
            let a = action.payload === "ascending"?state.filterGames.sort((a,b) => a.rating - b.rating):
            state.filterGames.sort((a,b) => b.rating - a.rating);
            return{
                ...state,
                filterGames: [...a]
            }
        case SORT_ABC:
            if(!Array.isArray(state.filterGames)) state.filterGames = [...state.games]
           let b = action.payload === "normal"?state.filterGames.sort((a,b) =>{if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;}):
           state.filterGames.sort((a,b) =>{if(b.name.toLowerCase() < a.name.toLowerCase()) return -1;})
            return{
                ...state,
                filterGames: [...b]
            }
            
        case SEARCH_NAME: 
            let name = state.games.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))    
            return{
                ...state,
                filterGames: [...name]
            }
        case GET_PLATFORMS:    
            return{
                 ...state,
                 platforms: action.payload
             }
        case EDIT_GAME:
            let x =  state.games.filter(e=> e.id === action.payload)
            console.log("from reducer", x, state.games)
            return{
                ...state,
                gameDetail:[...x]
            }
        case UPDATED:
            return{
                ...state,
                answer: "ok"
            }   
        default: 
            return state
    }
}