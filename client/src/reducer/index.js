import { GET_POKEMONS, FILTER_BY_TYPES, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_ATTACK, GET_NAME_POKEMONS, GET_TYPES } from "../actions";


const inicialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    pokemonName: []

}

function reducer(state = inicialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
                
            }
        case GET_NAME_POKEMONS:
            
            return{
                ...state,
                pokemons: [action.payload]
            }
        case GET_TYPES:
            return{
                ...state,
                types: [action.payload]

            }
        case FILTER_BY_TYPES:
            const allPokemons = state.allPokemons
            const typesFiltered = action.payload === 'All' ? allPokemons : allPokemons.filter(el => el.type[0] === action.payload || el.type[1] === action.payload) 
            // si mi payload es todo , me devolves todo. Sino entra a allpokemons y filtramelo por le payload que te llega, por payload le pasamos cada una de los status que tengo el back entonces al value de la etiqueta option le pongo lo que tengo en el back pq es lo que me llegara por payload y va a tener que coincidir en el filtro 
            console.log(typesFiltered)
            return{
                ...state,
                pokemons: typesFiltered
            }

            case "POST_POKEMONS":
                return{
                    ...state
                }
        
        case FILTER_CREATED:
            const allPokemons2 = state.allPokemons
            const createdFilter = action.payload === 'created' ? allPokemons2.filter(e => e.createdInDb) : allPokemons2.filter(e => !e.createdInDb)
            return{
                ...state,
                pokemons:  createdFilter

            }

        case ORDER_BY_NAME:
            //si action payload es asc accede a mi estado de pokem y hace un sort
            let sortedArr = action.payload === 'asc' ?
            state.pokemons.sort((a, b) => {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0
            }) :
            state.pokemons.sort((a, b) =>{
                if(a.name > b.name) return -1
                if(a.name < b.name) return 1
                return 0
            })
            return {
                ...state,
                pokemons: sortedArr
            }
        case ORDER_BY_ATTACK:
            let sortedArrAttack = action.payload === 'a' ?
            state.pokemons.sort((a,b) =>{
                if(a.pkAttack > b.pkAttack) return 1
                if(a.pkAttack < b.pkAttack) return -1
                return 0
            }) :
            state.pokemons.sort((a, b) =>{
                if(a.pkAttack > b.pkAttack) return -1
                if(a.pkAttack < b.pkAttack) return 1
                return 0
            })
            return{
                ...state,
                pokemons: sortedArrAttack
            }
            case 'POKEMON_NAME':
                return{
                    ...state,
                    pokemonName: action.payload
                }

            

        default:
            return state;
        
    }
}

export default reducer;