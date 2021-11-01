import axios from 'axios'
import {RUTE_DATA, RUTE_POKEMONS, RUTE_POKEMONSAPI, RUTE_POKEMONSDB, RUTE_NAME, RUTE_TYPE} from '../Urls/urls'

export const GET_POKEMONS = 'GET_POKEMONS';
export const FILTER_BY_TYPES = 'FILTER_BY_TYPES';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK'
export const GET_NAME_POKEMONS = 'GET_NAME_POKEMONS'
export const GET_TYPES = 'GET_TYPES'

// version async await
export function getPokemons(){
    return async function(dispatch){
        let json = await axios(RUTE_POKEMONS);
        console.log(json)
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
export function getNamePokemons(name){
    return async function(dispatch){
        try{
            var json = await axios(RUTE_NAME + name)
           
            return dispatch({
                type: GET_NAME_POKEMONS,
                payload: json.data
                
                
            })
            
        }catch(error){
            console.log(error)
        }
    }

}
export function getTypes(){
    return async function(dispatch){
        let json = await axios(RUTE_TYPE)
        return dispatch({
            type: GET_TYPES,
            payload: json.data
    })
}
}

export function postPokemons(payload){
    return async function(dispatch){
        const response = await axios.post(GET_POKEMONS, payload)
       
        return dispatch({
            type: 'POST_POKEMONS',
            payload: response.payload

        })
    }
}

export function filterPokemonByTypes(payload){
    console.log(payload)
    return{
        type: FILTER_BY_TYPES,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}
export function orderByAttack(payload){
    return{
        type: ORDER_BY_ATTACK,
        payload
    }
}

export function pokemonName(payload){
    return{
        type: 'POKEMON_NAME',
        payload
    }
}