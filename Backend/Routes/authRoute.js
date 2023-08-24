const express = require('express')
const { registerController, loginController } = require('../Controllers/authController')

const router =  express.Router()

//Routes
//REGISTER || POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login',loginController)

module.exports = router