const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/login', userController.logearUsuario);
router.post('/register', userController.crearUsuario)

module.exports = router