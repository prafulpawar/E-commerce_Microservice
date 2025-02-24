const Category = require("../models/categoryModel");

module.exports.categoryController = async(req,res)=>{
    try{
    //    const {filename} = req.file;
       const {category,description} = req.body;
       
       if(!category){
        return res.status(400).json({
            message:"Category Is Required"
        })
       }

       if(!description){
        return res.status(400).json({
            message:"Image Is Required"
        })
       }

      // Cheking Category Exists
      const isCategoryExists = await Category.findOne({category})
      if(isCategoryExists){
          return res.status(400).send({
            message:"Category Is Alredy Exists"
          })
      }

      // created category
      const createdCategory = await Category.create({
          category,
          image,
          description,
      })
   
      return res.status(400).json({
        data:createdCategory,
        message:" Created Category"
    })


    }
    catch(error){
         console.log(error)
        return res.status(400).json({
            message:"Failed To  Create Category"
        })
    }
}