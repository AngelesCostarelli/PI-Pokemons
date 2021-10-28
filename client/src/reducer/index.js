import { GET_POKEMONS } from "../actions";


const inicialState = {
    pokemons: []
}

function reducer(state = inicialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload
            }
            

        default:
            return state
        
    }
}

export default reducer;