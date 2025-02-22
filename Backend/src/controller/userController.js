const userModel = require("../models/userModel");

module.exports.userCreate = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      return res.status(400).json({
        message: "Username Is Required"
      })
    }
    if (!email) {
      return res.status(400).json({
        message: "Username Is Required"
      })
    }
    if (!password) {
      return res.status(400).json({
        message: "Username Is Required"
      })
    }

    // Cheking if user is exists
    const existsUser = await userModel.findOne({email});
    if(existsUser){
      return res.status(400).json({
        message: "User Is Already Exists"
      })
    }

    // if not exists then
    // hash the password
    const hashedPassword = await userModel.hashPassword(password);
    // now ab hum userCreate Karenge...
    const savedUser = await userModel.create({
          username,
          email,
          password:hashedPassword
    })
    // hum token generate karenge ab 
    const token =  savedUser.generateToken(savedUser)
    // error in token generation
    
    return res.status(200).json({
      message:"User Registred SucessFully",
      token:token
    })
  }

  catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}