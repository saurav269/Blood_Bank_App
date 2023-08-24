const userModel = require("../Models/userModel")
const bcrypt = require('bcryptjs')

const registerController = async(req,res) => {

    try{
        const existingUser = await userModel.findOne({email : req.body.email})

        //Validation
        if(existingUser){
            return res.status(200).send({
                success : false,
                message : 'User Already Register'
            })
        }
        //hash Password
        const salt = await bcrypt.genSalt(5)
        const hashedPassword =  await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        //rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
            success : true,
            message:"User has been register successfully",
            user,
        })

    }catch(err){
        console.log(err)
        res.status(500).send({
            success : false,
            message : 'Error in Register api',
            err
        })
    }

}

const loginController=()=>{

}

module.exports = {registerController, loginController}