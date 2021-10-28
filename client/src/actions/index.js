import axios from 'axios'
import {RUTE_DATA, RUTE_POKEMONS, RUTE_POKEMONSAPI, RUTE_POKEMONSDB, RUTE_NAME, RUTE_TYPE} from '../Urls/urls'

export const GET_POKEMONS = 'GET_POKEMONS';


// version async await
export function getPokemons(){
    return async function(dispatch){
        let json = await axios(RUTE_POKEMONSAPI);
        return dispatch({
            type: GET_POKEMONS,
            payload: json.data
        })
    }
}
// version promesas
// export function getPokemons(){
//     return function(dispatch){
//         axios(RUTE_POKEMONS)
//         .then(json =>{
//             dispatch({type: GET_POKEMONS, payload:json.data})
//         })
//     }
// }