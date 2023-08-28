const express = require ('express')
const authMiddleware = require('../middlewres/authMiddleware')
const { inventoryController, getInventoryController } = require('../Controllers/inventoryController')

const router = express.Router()

//routes
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, inventoryController)

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddleware, getInventoryController)

module.exports = router