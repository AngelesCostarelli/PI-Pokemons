
const { types } = require('pg')
const {Pokemon, Type} = require('../db')


const createPokemon = async (name, height, weight, pkHp, pkAttack, pkDefense, pkSpeed, pkImg, type)=>{
   
        const newPokemon = await Pokemon.create({
            
            name: name, 
            height: height || 0, 
            weight: weight || 0,
            pkHp: pkHp || '',
            pkAttack: pkAttack || '', 
            pkDefense: pkDefense || '', 
            pkSpeed: pkSpeed || '',
            pkImg: pkImg || '',
            
        },)
        let typeDb = await Type.findAll({
            where:{name:type}
        })
         newPokemon.addType(typeDb)
        //  console.log(typeDb)
        
        return newPokemon
    
}
module.exports = createPokemon