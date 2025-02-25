const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

module.exports.productCreateController = async (req, res) => {
    try {
        const { name, description, quantity, price, category, brand, stock } = req.body;
        //  const {image} = req.file
        const errors = [];

        if (!name) errors.push("Required Name");
        if (!description) errors.push("Required Description");
        if (quantity === undefined || quantity < 0) errors.push("Required Quantity (must be ≥ 0)");
        if (price === undefined || price < 0) errors.push("Required Price (must be ≥ 0)");
        if (!category) errors.push("Required Category");
        if (!brand) errors.push("Required Brand");
        if (stock === undefined || stock < 0) errors.push("Required Stock (must be ≥ 0)");

        if (errors.length > 0) {
            console.log(error)
            return res.status(400).json({ errors });
        }

        const categoryExists =  await Category.findOne({category});
       
        if(!categoryExists){
            return res.status(400).json({
                message:"Error In Creating Product Category Not Exists"
            })
        }

        const productCreated = await Product.create({
            name,
            // image,
            description,
            price,
            category:categoryExists._id,
            brand,
            stock
        })
       return res.status(400).json({
         message:productCreated,
       })
        
}
    catch (error) {
          console.log(error)
        return res.status(400).json({
            message: "Error In Creating Product"
        })
    }
}

module.exports.manageStock = async(req,res)=>{
    try{

          const {quantity,productName} = req.body;
          if(!quantity || quantity<1){
             return res.status(400).json({
                message:"Qunatity Required"
             })
          }

          if(!productName){
            return res.status(400).json({
               message:"productID Required"
            })
         }
   
         const product = await Product.findOne({name:productName});
        
         if(!product){
            return res.status(400).json({
                message:"Product Is Required"
            })
         }
         const updateStock = await Product.findOneAndUpdate(
            { _id: product._id }, 
            { 
                $push: { stock: quantity } 
            },
            { new: true } 
        );
        

        return res.status(200).send({
            message:updateStock
        })


    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            message:"Error In Managing Stock"
        })
    }
}

