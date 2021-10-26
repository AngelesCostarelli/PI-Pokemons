const { Router } = require('express');
const {Pokemon, Type} = require('../db')
const axios = require('axios')
const router = Router();
const {POKEMON_URL} = require('../Util/url');
const getPokemonsApi = require('../controllers/getPokemonsApi');
const getPokemonDb = require('../controllers/getPokemonDb');
const getAllPk = require('../controllers/getAllPk');

//GET POKEMONS FROM DATABASE
router.get('/db', async (req, res, next) =>{
    const result = await getPokemonDb()
    try{
      return res.status(200).json(result)
    }catch(err){
      next(err)
    }
})

//GET POKEMONS FROM API
router.get('/api', async(req, res, next)=>{
    const result = await getPokemonsApi()
    try{
      return res.status(200).json(result)
    }catch(err){
      next(err)
    }
})

// router.get('/', async (req, res, next)=>{
//     const getAllPokemon = await getAllPk()
//     console.log(getAllPokemon)
    
//     try{
//         return res.status(200).json(getAllPokemon)
//       }catch(err){
//         next(err)
//       }
//   })

//GET POKEMON BY NAME FROM THE URL BY QUERYS (?) AND IF IT DOESN´T PUT ANY, WE GET ALLPOKEMONS FROM DB AND ALSO FROM API
router.get('/', async (req, res, next)=>{
    const {name} = req.query
   
    const getAllPokemon = await getAllPk()
    try{
        if(name){
            const result = getAllPokemon.find(e => e.name == name)
           
            return res.json(result)
            
        }else{
            return res.json(getAllPokemon)
        }

    }catch(err){
        return next(err)
    }
})

//GET POKEMON BY ID PASSED BY PARAMS (:)
router.get('/:id', async (req, res, next)=>{
    const {id} = req.params
    const getAllPokemon = await getAllPk()
    const result = getAllPokemon.find(e => e.id == id)
   
    try{
        return res.json(result)

    }catch(err){
        next(err)
    }   
})

//POST CREATED POKEMONS BY BODY
router.post('/', async (req, res, next) =>{
    try{
        const {id, name, height, weight,pkHp,pkAttack, pkDefense, pkImg, type1, type2} = req.body;
        const newPokemon = await Pokemon.create({
            id: id,
            name: name, 
            height: height || 0, 
            weight: weight || 0,
            pkHp: pkHp || '',
            pkAttack: pkAttack || '', 
            pkDefense: pkDefense || '', 
            pkImg: pkImg || 'https://pbs.twimg.com/profile_images/1178942318981701634/d5qM22Ft.jpg', 
            type1: type1 || 'No tiene', 
            type2: type2 || 'No tiene'
        })
        res.send(newPokemon)

    }catch(err){
        next(err)
    }
})





module.exports = router;
