var express = require('express');
var router = express.Router();

const providerController = require('../controllers/provider');

/* GET home page. */
router.get('/', providerController.list);
router.get('/detail/:id', providerController.detail);
router.post('/add', providerController.add);
router.get('/edit/:id', providerController.edit);
router.post('/update/:id', providerController.update);
router.get('/delete/:id', providerController.delete);

module.exports = router;
