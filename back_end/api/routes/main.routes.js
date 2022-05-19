var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');

// http verbs

// post /api/providers 
router.post('/providers', mainController.create);

// get all /ap/providers
router.get('/providers', mainController.readAll);

// get one /api/providers/123
router.get('/providers/:id', mainController.readOne);

// put /api/providers/123
router.put('/providers', mainController.update);

// delete one providee /api/provider/123
router.delete('/providers/:id', mainController.deleteOne);

// dele all providers /api/providers
router.delete('/providers', mainController.deleteAll);

module.exports = router;