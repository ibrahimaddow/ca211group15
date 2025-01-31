// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();
// importing home controller
const homeController = require('../controllers/home_controller');
// import success controller
const successController = require('../controllers/success_controller');

router.get('/', homeController.home);
router.get('/success', successController.successMessage);
router.post('/create_contact', homeController.create);
router.get('/delete_contact', homeController.delete);
router.get('/edit_contact/:id', homeController.edit)
router.post('/update_contact', homeController.update);

module.exports = router;