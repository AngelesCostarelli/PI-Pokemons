const {Pokemon, Type} = require('../db')


const getPokemonDb = async () =>{
    let pokeDb = await Pokemon.findAll({
        include: Type
            // model: Type,
            // attributes: ['name'],
            // through:{
            //     attributes: [],
            // }
        
    })
    try{
        return pokeDb;

    }catch(err){
        console.log(err)
    }
}
module.exports= getPokemonDb;