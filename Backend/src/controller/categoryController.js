const Category = require("../models/categoryModel");

module.exports.categoryController = async(req,res)=>{
    try{
       const {category,image,description} = req.body;
       
       if(!category){
        return res.status(400).json({
            message:"Category Is Required"
        })
       }

       if(!image){
        return res.status(400).json({
            message:"Image Is Required"
        })
       }

       if(!description){
        return res.status(400).json({
            message:"Image Is Required"
        })
       }

      // Cheking Category Exists
      const isCategoryExists = await Category.findOne(category)
      if(!isCategoryExists){
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
    





    }
    catch(error){
        return res.status(400).json({
            message:"Failed To  Create Category"
        })
    }
}