var express = require('express');
var router = express.Router();
let indexControllers = require ('../controllers/indexControllers.js');

/* GET home page. */
router.get('/', indexControllers.index);

module.exports = router;
