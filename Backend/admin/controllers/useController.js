module.exports.adminCreateController =  async(req,res)=>{
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


       
}