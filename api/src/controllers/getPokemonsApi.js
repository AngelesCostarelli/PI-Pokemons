const axios = require('axios')


const getPokemonsApi = async () =>{
    const pokemonsApi = await axios.get( "https://pokeapi.co/api/v2/pokemon?limit=40")
    const pk = pokemonsApi.data.results
    try{
        const res = pk.map(e => axios.get(e.url))
        let pokemons = Promise.all(res)
        .then(e => {
            let pokemon = e.map(e=> e.data)
            // console.log(pokemon)
            let allData = []
            pokemon.map(e => {
                // console.log(e.types[0].type.name)
                allData.push({
                        id: e.id,
                        name : e.name,
                        pkHp: e.stats[0].base_stat,
                        pkAttack: e.stats[1].base_stat,
                        pkDefense: e.stats[2].base_stat,
                        pkSpeed: e.stats[5].base_stat,
                        height: e.height,
                        weight: e.weight,
                        pkImg: e.sprites.other.home.front_default,
                        type: e.types.length < 2 ? [e.types[0].type.name] : [e.types[0].type.name, e.types[1].type.name]

                })
            })
            return allData
        })
        return pokemons



    }catch(err){
        console.log(err)
    }
}


// const getPokemonsApi = async () => {
//     const pokemon = await axios.get( "https://pokeapi.co/api/v2/pokemon?limit=40") //Traigo los primeros 20 pokemons de la Api
//     // console.log(pokemon.data.results)
//     let allPokemons = []
//     for (const p of pokemon.data.results) {
//         const poke = await axios.get(p.url)
//         const {id, name, height, weight, stats, sprites, types} = poke.data
//         const [hp, attack, defense, special_attack, special_defense, speed] = stats
//         const pkHp = hp.base_stat;
//         const pkAttack = attack.base_stat;
//         const pkDefense = defense.base_stat;
//         const pkSpeed = speed.base_stat;
//         const pkImg =  sprites.other.home.front_default;
//         const type = types.map(e => e.type.name)
       
        
//         allPokemons=[
//             ...allPokemons,
//             {id, name, height, weight,pkHp,pkAttack, pkDefense, pkSpeed, pkImg, type: type.length < 2 ? [type[0]] : [type[0], type[1]]}
//          ]        
//     }
    
//     return allPokemons

// }





module.exports = getPokemonsApi