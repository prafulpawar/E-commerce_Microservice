const mongoose = require('mongoose');
const config = require('../config/config')


const connectDB = async (req,res)=>{
      try{
           await mongoose.connect(config.MONGO_URI_ADMINS);
           console.log('Mongoose Connected')
      }
      catch(error){
           console.log('Mongoose  Error')
      }
}

module.exports = connectDB