// Require de Express
const express = require('express');
var router = express.Router(); // utilizamos router
let heroesControllers = require ('../controllers/heroesControllers.js')


// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', heroesControllers.heroes);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/:id', heroesControllers.profesion);


module.exports = router;