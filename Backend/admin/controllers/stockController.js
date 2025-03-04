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
             data:products,
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
         if(!product){
            return res.status(500).json({
                message:"Product Is Required"
            })
         }

        //  now match product based on theire category && subcategory;
        //   const products = await categoryModel.find(product)
        // now we can solve this problem using pipline agrregation

        db.collection1.aggregate([

            {
          
              "$lookup": {
          
                "from": "collection2", // Target collection to join
          
                "localField": "commonField", // Field in the current document to match
          
                "foreignField": "commonField", // Matching field in the target collection
          
                "as": "joinedData" // Alias for the joined documents
          
              }
          
            },
          
            {
          
              "$match": {
          
                "joinedData.someField": "desiredValue" // Filter based on the joined data
          
              }
          
            }
          
          ]) 
          
   
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