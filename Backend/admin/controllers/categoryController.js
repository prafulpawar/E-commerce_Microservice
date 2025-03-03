const categoryModel = require("../models/categorymodel");
module.exports.categoryController =async (req,res)=>{
       try{
           const {category,subcategory} = req.body;

           if(!category){
            return res.status(400).json({
                message:"Category Required"
            })
           }

           if(!subcategory){
            return res.status(400).json({
                message:"Category Required"
            })
           }
            
          //cheking category or subcategory exists
          const categoryExists = await categoryModel.findOne({
            category
          })

          if(categoryExists){
              return res.status(400).json({
                message:"Category Is Exists"
              })
          }

          const subcategoryExists = await categoryModel.findOne({
              subcategory 
          })

          if(subcategoryExists){
            return res.status(400).json({
                message:"Subcategory Is Exists"
              })
          }

          //Making An Category 
          const createdCategory = await categoryModel.create({
                category,
                subcategory
          })
         return res.status(200).json({
            data:createdCategory,
            message:true
         })
       }
       
       catch(error){
        return res.status(400).json({
            message:"Category Created"
        })
       }
}