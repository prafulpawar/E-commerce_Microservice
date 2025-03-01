const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')
const config = require('../config/config')
const userSchema = new mongoose.Schema({
      name:{
        type:String,
        minlength:[3,'Username Must Be At Least 3 Charectors'],
        maxlength:[20,'Username Not Be Greater Then 20 Charectors'],
      },
      email:{
        type:String,
        minlength:[3,'Email Must Be At Least 3 Charectors'],
        maxlength:[50,'Email Not Be Greater Then 50 Charectors'],
      },
      profile:{
        type:String,
        default:'https://t3.ftcdn.net/jpg/05/87/76/66/360_F_587766653_PkBNyGx7mQh9l1XXPtCAq1lBgOsLl6xH.jpg'
      },
})

userSchema.methods.generateToken = function(user){
     return jwt.sign({_id:user.id,email:user.email },config.JWT_SECRET)
}

userSchema.statics.hash = function(password){
      return bcrypt.hash(password,10)
}

const userModel = mongoose.model("AdminUsers",userSchema);
module.exports = userModel;