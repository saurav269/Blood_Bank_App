const inventoryModel = require("../Models/inventoryModel")
const userModel = require("../Models/userModel")
const mongoose = require("mongoose")

//CREATE INVENTORY
const inventoryController = async(req,res) => {

    try{
        const {email} = req.body
        //VALIDATION
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(500).send({
                success : false,
                message : "User not found",
            })
        }
        // if(inventoryType === 'in' && user.role !== 'donar'){
        //     return res.status(500).send({
        //         success : false,
        //         message : "Not a donar account",
        //     })
        // }
        // if(inventoryType === 'out' && user.role !== 'hospital'){
        //     return res.status(500).send({
        //         success : false,
        //         message : "Not a Hospital account",
        //     })
        // }

        if (req.body.inventoryType == "out") {
          const requestedBloodgroup = req.body.bloodgroup;
          const requestedQuantityofBlood = req.body.quantity;
          const organisation = new mongoose.Types.ObjectId(req.body.userID);

          // CALCULATE BLOOD QUANTITY
          const totalofRequestedBlood = await inventoryModel.aggregate([
            {
              $match: {
                organisation,
                inventoryType: "in",
                bloodgroup: requestedBloodgroup,
              },
            },
            {
              $group: {
                _id: "$bloodgroup",
                total: { $sum: "$quantity" },
              },
            },
          ]);

        //   console.log("Total in", totalofRequestedBlood);
          const totalIn = totalofRequestedBlood[0]?.total || 0;

          // CALCULATE OUT BLOOD QUANTITY
          const totalOutofRequestedBlood = await inventoryModel.aggregate([
            {
              $match: {
                organisation,
                inventoryType: "out",
                bloodgroup: requestedBloodgroup,
              },
            },
            {
              $group: {
                _id: "$bloodgroup",
                total: { $sum: "$quantity" },
              },
            },
          ]);
          const totalOut = totalOutofRequestedBlood[0]?.total || 0;

          //IN AND OUT CALCULATION
          const availableQuantityOfBloodgroup = totalIn - totalOut;

          //CHECKING QUANTITY VALIDATION
          if (availableQuantityOfBloodgroup < requestedQuantityofBlood) {
            return res.status(500).send({
              success: false,
              message: `Only ${availableQuantityOfBloodgroup}ML of ${requestedBloodgroup.toUpperCase()} is available`,
            });
          }
          req.body.hospital = user?._id;
        }else{
            req.body.donar = user?._id
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

//GET ALL BLOOD RECORDS
const getInventoryController=async(req,res)=>{

    try{
        const inventory = await inventoryModel.find({organisation : req.body.userID})
        .populate('donar').populate('hospital').sort({createdAt : -1});
        return res.status(200).send({
            success : true,
            message : 'Gettting all recodrs successfully',
            inventory,
        });
    }catch(err){
        console.log(err)
        res.status(500).send({
            success : false,
            message : 'Error in getting blood records API',
            err
        })
    }
}

module.exports = {inventoryController, getInventoryController}