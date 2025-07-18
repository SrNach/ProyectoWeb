const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verificarToken } = require('../middlewares/authMiddleware');

router.post('/login', authController.login);
router.get('/perfil', verificarToken, authController.perfil);
router.post('/change-passw', authController.changePassword);

module.exports = router;