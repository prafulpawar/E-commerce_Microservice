const config = require('../config/config')
const mongoose = require('mongoose');
//Making An Function
const ConnectDB = async (req,res)=>{
    try{
         const db  = await mongoose.connect(config.MONGO_URI);
         console.log("Connected To DB")
    }
    catch(error){
           console.log(error)
          return res.status(400).json({
            message:error.message
          })
    }
}

module.exports = ConnectDB