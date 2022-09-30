import {CLEAN, GET_ALL, GET_GAME_DETAIL, GET_GAME_NAME, GET_GENRES, GET_ID} from "./actions.js"

const initialState ={
    games:[],
    gameDetail:[],
    gameName:[]
}

export function rootReducer(state = initialState, action){
    switch (action.type){           
        case GET_ALL:
             
        return{
            ...state,
            games: action.payload
        }
        case GET_GAME_DETAIL:
            
            console.log("reducer")  
        return{
            ...state,
            gameDetail: action.payload
        }
        case GET_GAME_NAME:
        return{
            ...state,
            gameName: action.payload
        }
        case CLEAN:
            console.log("cleaning???")
            return{
                ...state,
                gameDetail: action.payload
            }
        default: 
        return state
    }
}