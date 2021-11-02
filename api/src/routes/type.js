const { Router } = require('express');
const {Type} = require('../db')
const axios = require('axios')
const router = Router();
// const addTypeToDb = async () => {
//     try{
//       // console.log('entra')
//       const typeFromApi = await axios.get('https://pokeapi.co/api/v2/type')
//       // console.log(typeFromApi)
//       const typesNames = typeFromApi.data.results
//       // console.log(typesNames)
//       typesNames.map(e => {
//         Type.findOrCreate({name: e.name})
//       })
//     }catch(err){
//       console.error(err)
      
  
//     }
//   }

router.get('/', async (req, res, next) =>{
    try{
        
        const type = await Type.findAll()
        console.log(type)
        res.send(type)

    }catch(err){
        next(err)
    }
})

// router.post('/', (req, res, next)=>{
//     const {name} = req.body;
//     return Type.create({name})
//     .then((newType) =>{
        
//         res.status(201).send(newType)
//     })
//     .catch(err => next(err))

// })



module.exports = router;
