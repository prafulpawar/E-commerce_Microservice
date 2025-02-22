const mongoose = require('mongoose');
//Making An Function
const ConnectDB = async ()=>{
    try{
         const db  = await mongoose.connect('')
    }
    catch(error){
          return res.status(400).json({
            message:error.message
          })
    }
}

module.exports = ConnectDB