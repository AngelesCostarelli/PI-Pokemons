const axios = require('axios')





const getPokemonsApi = async () => {
    const pokemon = await axios.get( "https://pokeapi.co/api/v2/pokemon?limit=5") //Traigo los primeros 20 pokemons de la Api
    // console.log(pokemon.data.results)
    let allPokemons = []
    for (const p of pokemon.data.results) {
        const poke = await axios.get(p.url)
        const {id, name, height, weight, stats, sprites, types} = poke.data
        const [hp, attack, defense] = stats
        const pkHp = hp.base_stat;
        const pkAttack = attack.base_stat;
        const pkDefense = defense.base_stat;
        const pkImg =  sprites.front_default;
        const [typeOne, typeTwo] = types
    
        
        allPokemons=[
            ...allPokemons,
            {id, name, height, weight,pkHp,pkAttack, pkDefense, pkImg, type1: typeOne.type.name, type2: typeTwo ? typeTwo.type.name : 'No tiene'}
         ]        
    }
    return allPokemons

}


module.exports = getPokemonsApi