import { GET_POKEMONS, FILTER_BY_TYPES } from "../actions";


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
        case FILTER_BY_TYPES:
            const allPokemons = state.pokemons
            const typesFiltered = action.payload === 'All' ? allPokemons : allPokemons.filter(el => el.type1 === action.payload) 
            // si mi payload es todo , me devolves todo. Sino entra a allpokemons y filtramelo por le payload que te llega, por payload le pasamos cada una de los status que tengo el back entonces al value de la etiqueta option le pongo lo que tengo en el back pq es lo que me llegara por payload y va a tener que coincidir en el filtro 

            return{
                ...state,
                pokemons: typesFiltered
            }
            

        default:
            return state;
        
    }
}

export default reducer;