const express = require('express');
const router = express.Router();

// Controller
const helloController = require('../controllers/helloController');

// Routes
router.get('/', helloController.sayHello);

module.exports = router;
