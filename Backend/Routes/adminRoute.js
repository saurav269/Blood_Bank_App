
const express = require('express')
const authMiddleware = require('../middlewres/authMiddleware')
const { getDonarListController } = require('../Controllers/adminController')
const adminMiddleware = require('../middlewres/adminMiddleware')

//ROUTER OBJECT
const router = express.Router()

//ROUTES

//GET DONAR LIST 
router.get('/donar-list', authMiddleware,adminMiddleware, getDonarListController)

//EXPORTS
module.exports = router;