var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main');

/* GET home page. */
router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/forgort-password', mainController.forgortpassword);
// router.get('/error', mainController.error);

module.exports = router;
