const { Router } = require('express');
const {Pokemon, Type} = require('../db')
const axios = require('axios')
const router = Router();
const getPokemonsApi = require('../controllers/getPokemonsApi');
const getPokemonDb = require('../controllers/getPokemonDb');
const getAllPk = require('../controllers/getAllPk');
const createPokemon = require('../controllers/createPokemon');


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
            const result = getAllPokemon.find(e => e.name.toLowerCase() === name.toLowerCase())
          
           
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
    const {name, height, weight, pkHp, pkAttack, pkDefense, pkSpeed, pkImg, type} = req.body;
    try{
        const respose = await createPokemon(name, height, weight, pkHp, pkAttack, pkDefense, pkSpeed, pkImg, type)
        res.send(respose)
    }catch(err){
        next(err)
    }
})





module.exports = router;
