var express = require('express');
var router = express.Router();

const mainController = require('../controllers/main');
const loginController = require('../controllers/login');
const registerController = require('../controllers/register');
/* GET home page. */
router.get('/', mainController.home);
router.get('/login', loginController.login);
router.get('/register', registerController.register);

module.exports = router;
