const userModel = require("../Models/userModel")

const getDonarListController=async(req,res)=>{
    try{
        const donarData = await userModel
          .find({ role: "donar" })
          .sort({ createdAt: -1 });
          return res.status(200).send({
            success : true,
            TotalCount : donarData.length,
            message : "GETTING ALL DONAR LIST DATA SUCCESSFULLY",
            donarData
          })

    }catch(err){
        console.log(err)
        return res.status(500).send({
            success : false,
            message : "Error in Donar List API",
            err
        })
    }

}

//EXPORTS
module.exports = {getDonarListController}