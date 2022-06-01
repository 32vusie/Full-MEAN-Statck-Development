var express = require('express');
var router = express.Router();
const providersController = require('../controllers/providers');

/* GET list page. */
router.get('/', providersController.list);
// get details page
router.get('/details/:id', providersController.details);
// get edit page
router.get('/edit/:id', providersController.edit);
// POST update page
router.post('/update/:id', providersController.update);
// GET add provider page
router.get('./add-provider', providersController.addform);
// POST add page
router.post('/add', providersController.add);
// GET delet page
router.get('/delete/:id', providersController.delete);

module.exports = router;

// console.log(providersController);
 