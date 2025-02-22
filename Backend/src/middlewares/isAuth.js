const userModel = require("../models/userModel");

module.exports.isAuth = async (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(400).json({
            message:'Error  Authrization'
        })
    }

    const decode = await userModel.verifyToken(token);

    if(!decode){
        return res.status(400).json({
            message:'Error  Authrization'
        })
    }

    const user = await userModel.findById(decode._id);
     
    req.user = user
    next();


}