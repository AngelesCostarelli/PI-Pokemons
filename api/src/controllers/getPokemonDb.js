const {Pokemon, Type} = require('../db')


const getPokemonDb = async () =>{
    let pokeDb = await Pokemon.findAll({
        include:Type
    })
    try{
        return pokeDb;

    }catch(err){
        console.log(err)
    }
}
module.exports= getPokemonDb;