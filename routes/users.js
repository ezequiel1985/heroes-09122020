var express = require('express');
var router = express.Router();
let usersControllers = require ('../controllers/usersControllers.js')


/* GET users listing. */
router.get('/', usersControllers.users);

module.exports = router;
