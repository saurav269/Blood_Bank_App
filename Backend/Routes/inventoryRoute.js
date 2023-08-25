const express = require ('express')
const authMiddleware = require('../middlewres/authMiddleware')
const { inventoryController } = require('../Controllers/inventoryController')

const router = express.Router()

//routes
//ADD INVENTORY || POST

router.post('/create-inventory', authMiddleware, inventoryController)

module.exports = router