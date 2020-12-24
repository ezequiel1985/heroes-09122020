const express = require('express');
var router = express.Router();
let creditosControllers = require ('../controllers/creditosControllers.js');

router.get('/', creditosControllers.creditos);

module.exports = router;