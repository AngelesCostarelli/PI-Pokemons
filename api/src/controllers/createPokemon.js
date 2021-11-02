
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
            pkImg: pkImg || 'https://pbs.twimg.com/profile_images/1178942318981701634/d5qM22Ft.jpg',
            
        },)
        let typeDb = await Type.findAll({
            where:{name:type}
        })
         newPokemon.addType(typeDb)
        //  console.log(typeDb)
        
        return newPokemon
    
}
module.exports = createPokemon