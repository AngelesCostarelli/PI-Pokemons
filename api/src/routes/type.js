const { Router } = require('express');
const {Type} = require('../db')

const router = Router();

router.get('/', async (req, res, next) =>{
    try{
        const type = await Type.findAll()
        res.send(type)

    }catch(err){
        next(err)
    }
})

router.post('/', (req, res, next)=>{
    const {name} = req.body;
    return Type.create({name})
    .then((newType) =>{
        
        res.status(201).send(newType)
    })
    .catch(err => next(err))

})



module.exports = router;
