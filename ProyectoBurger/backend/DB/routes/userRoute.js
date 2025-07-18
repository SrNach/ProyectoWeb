const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.index);
router.post('/register', UserController.register);

module.exports = router;
