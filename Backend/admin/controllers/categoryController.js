module.exports.categoryController = (req,res)=>{
       try{

           const {name,subcategory} = req.body;
           if(!name){
            return res.status(400).json({
                message:"Category Required"
            })
           }

           if(!subcategory){
            return res.status(400).json({
                message:"Category Required"
            })
           }


       }
       
       catch(error){
        return res.status(400).json({
            message:"Category Created"
        })
       }
}