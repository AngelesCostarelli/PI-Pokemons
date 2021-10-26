const { Router } = require('express');
const pokemonRoute = require('./pokemon')
const typeRoute = require('./type')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/pokemon', pokemonRoute)
router.use('/type', typeRoute)

module.exports = router;
