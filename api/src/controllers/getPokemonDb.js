const {Pokemon, Type} = require('../db')


const getPokemonDb = async () =>{
    let pokeDb = await Pokemon.findAll({
        include: Type
                
    })
    try{
        const filterDb = pokeDb.map((p)=>{
            
            return{
                id: p.id,
                name: p.name,
                height: p.height,
                weight: p.weight,
                pkHp: p.pkHp,
                pkAttack: p.pkAttack,
                pkDefense: p.pkDefense,
                pkSpeed: p.pkSpeed,
                pkImg: p.pkImg,
                createdInDb: p.createdInDb || true,
                type: p.types.map(e => {
                    return e.name                                            
                })
            }
         }  )
        return filterDb

    }catch(err){
        console.log(err)
    }
}
module.exports= getPokemonDb;