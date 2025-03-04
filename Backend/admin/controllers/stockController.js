const categoryModel = require("../models/categorymodel");

module.exports.stockDetailsCategory = async(req,res)=>{
    try{

         const { category } = req.body;
         if(!category){
            return res.status(400).json({
                message:"No Category Is Given"
            })
         }
         // exists category
         const existsCat = await categoryModel.findOne({
            category
         })

         if(!existsCat){
            return res.status(400).json({
                message:" Category Is Exists"
            })
         }

         // categoryWise Products
        const products = await categoryModel.find({
              existsCat
        })
         
         
        
        return res.status(200).json({
             data:existsCat,
             message:"Successfully Fetched Category"
        })

       

    }
    catch(error){
        return res.status(400).json({
            message:"Cant Get Details Of Stock"
        })
    }
}

module.exports.stockDetailsProduct = async(req,res)=>{
    try{
         const {product} = req.body;

    }
    catch(error){
        return res.status(400).json({
            message:"Cant Get Details Of Stock"
        })
    }
}


module.exports.stockDetailsSubcategory = async(req,res)=>{
    try{
         const {Subcategory} = req.body;


    }
    catch(error){
        return res.status(400).json({
            message:"Cant Get Details Of Stock"
        })
    }
}