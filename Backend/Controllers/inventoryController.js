const inventoryModel = require("../Models/inventoryModel")
const userModel = require("../Models/userModel")

//CREATE INVENTORY
const inventoryController = async(req,res) => {

    try{
        const {email, inventoryType} = req.body
        //VALIDATION
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(500).send({
                success : false,
                message : "User not found",
            })
        }
        if(inventoryType === 'in' && user.role !== 'donar'){
            return res.status(500).send({
                success : false,
                message : "Not a donar account",
            })
        }
        if(inventoryType === 'out' && user.role !== 'hospital'){
            return res.status(500).send({
                success : false,
                message : "Not a Hospital account",
            })
        }
        //SAVE RECORD
        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success : true,
            message : "New blood record has been added"
        })

    }catch(err){
        console.log(err)
        res.status(500).send({
            success : false,
            message : "Error in Inventory Api",
            err
        })
    }
}

module.exports = {inventoryController}