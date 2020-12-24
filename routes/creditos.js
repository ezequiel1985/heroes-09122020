const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Hola, soy Ezequiel Jaureguiberry. Me agrada emprender cosas nuevas, aunque me cuesta madurar las ideas porque soy muy estructurado.');
});

module.exports = router;