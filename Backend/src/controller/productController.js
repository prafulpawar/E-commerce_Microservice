const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

module.exports.productCreateController = async (req, res) => {
    try {
        const { name, description, quantity, price, category, brand, stock } = req.body;
        // const {image} = req.file
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
            image,
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