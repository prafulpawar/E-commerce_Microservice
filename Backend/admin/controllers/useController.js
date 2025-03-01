const userModel = require("../models/usermodel");

module.exports.adminCreateController =  async(req,res)=>{

      try{
        const {username,email,password} = req.body;
        if(!username){
         return res.status(400).json({
            message: "Username Is Required"
         })
        }
        if(!email){
         return res.status(400).json({
            message: "Email Is Required"
         })
        }
        if(!password){
         return res.status(400).json({
            message: "Password Is Required"
         })
        }
        //Check If User Exists
        const existsUser = await userModel.find({
           $or:[
               {name:username},
               {email:email}
           ]
        })
        // if userExists 
        if(existsUser){
         return res.status(400).json({
             message:"UserName Is Alredy Registred"
         })
        }
        // Now If User Not Exists
          // Making bcrypt file 
      const hashPassword = await userModel.hash(password);
        // now userCreation
      if(!hashPassword){
         return res.status(400).json({
             message:"Error While Hashing Password"
         })
      }
 
     // now create user
     const user = await userModel.create({
           username,
           email,
           password:hashPassword
 
     })
      }
      catch(error){
          return res.status(500).json({
             message:"Error While Creating A User"
          })
      }
}