const { Router } = require('express');
const {Pokemon, Type} = require('../db')
const axios = require('axios')
const router = Router();
const {POKEMON_URL} = require('../Util/url');
const getPokemonsApi = require('../controllers/getPokemonsApi');
const getPokemonDb = require('../controllers/getPokemonDb')


router.get('/db', async (req, res, next) =>{
    const result = await getPokemonDb()
    try{
      return res.status(200).json(result)
    }catch(err){
      next(err)
    }
})
router.get('/api', async(req, res, next)=>{
    const result = await getPokemonsApi()
    try{
      return res.status(200).json(result)
    }catch(err){
      next(err)
    }
})

router.get('/', async (req, res, next)=>{
    const api = await getPokemonsApi()
    const db = await getPokemonDb()
    const all = api.concat(db)
    // console.log(all)
    
    try{
        return res.status(200).json(all)
      }catch(err){
        next(err)
      }
  })


 
router.get('/:id', async (req, res, next)=>{
    const {id} = req.params
    const api = await getPokemonsApi()
    const db = await getPokemonDb()
    const all = api.concat(db)
    const result = all.find(e => e.id.toString() === id)
    console.log(result)
    try{
        return res.json(result)

    }catch(err){
        next(err)
    }



   
})




router.post('/', async (req, res, next) =>{
    try{
        const {name, image} = req.body;
        const newPokemon = await Pokemon.create({
            name,
            image
        })
        res.send(newPokemon)

    }catch(error){
        next(error)
    }
})

router.post('/:pokemonId/type/:typeId', async (req, res, next)=>{
    try{
        const {pokemonId, typeId} = req.params;
        const pokemon = await Pokemon.findByPk(pokemonId)
        await pokemon.addType(typeId)
        res.send(200)

    }catch(error){
        next(error)
    }
})



module.exports = router;
