const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

module.exports.productCreateController = async (req, res) => {
    try {
        const { name, image, description, quantity, price, discount, category, brand, stock } = req.body;
         //  erros ke liye 
        const errors = [];

        if (!name) errors.push("Required Name");
        if (!description) errors.push("Required Description");
        if (quantity === undefined || quantity < 0) errors.push("Required Quantity (must be ≥ 0)");
        if (price === undefined || price < 0) errors.push("Required Price (must be ≥ 0)");
        if (!category) errors.push("Required Category");
        if (!brand) errors.push("Required Brand");
        if (stock === undefined || stock < 0) errors.push("Required Stock (must be ≥ 0)");

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
      
        // categoryExists

        const categoryExists =  await Category.findOne({category});
        if(!categoryExists){
            return res.status(400).json({
                message:"Error In Creating Product Category Not Exists"
            })
        }

        // categoryExists

        const productCreated = await Product.create({
            name,
            image,
            description,
            price,
            category:categoryExists.id,
            brand,
            stock
        })
       return res.status(400).json({
         message:productCreated,
       })
        

    }
    catch (error) {
        return res.status(400).json({
            message: "Error In Creating Product"
        })
    }
}