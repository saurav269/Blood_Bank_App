const express = require ('express')
const authMiddleware = require('../middlewres/authMiddleware')
const { inventoryController, getInventoryController, getDonarsControllers, getHospitalControllers, getOrganisationController, getOrganisationForHospitalController } = require('../Controllers/inventoryController')

const router = express.Router()

//routes
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, inventoryController)

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddleware, getInventoryController)

//GET ALL DONARS RECORDS
router.get('/get-donars',authMiddleware, getDonarsControllers)

//GET ALL HOSPITAL RECORDS
router.get('/get-hospitals',authMiddleware, getHospitalControllers)

//GET ALL ORGANISATION RECORDS
router.get('/get-organisation',authMiddleware, getOrganisationController)

//GET ORGANISATION FOR HOSPITALS RECORDS
router.get('/get-organisation-for-hospital',authMiddleware, getOrganisationForHospitalController)

module.exports = router