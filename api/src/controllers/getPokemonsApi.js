const axios = require('axios')





const getPokemonsApi = async () => {
    const pokemon = await axios.get( "https://pokeapi.co/api/v2/pokemon?limit=40") //Traigo los primeros 20 pokemons de la Api
    // console.log(pokemon.data.results)
    let allPokemons = []
    for (const p of pokemon.data.results) {
        const poke = await axios.get(p.url)
        const {id, name, height, weight, stats, sprites, types} = poke.data
        const [hp, attack, defense] = stats
        const pkHp = hp.base_stat;
        const pkAttack = attack.base_stat;
        const pkDefense = defense.base_stat;
        const pkImg =  sprites.other.home.front_default;
        const type = types.map(e => e.type.name)
       
        
        allPokemons=[
            ...allPokemons,
            {id, name, height, weight,pkHp,pkAttack, pkDefense, pkImg, type: type.length < 2 ? [type[0]] : [type[0], type[1]]}
         ]        
    }
    
    return allPokemons

}





module.exports = getPokemonsApi