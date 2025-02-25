const cartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");
const userModel = require("../models/userModel");

module.exports.cartController = async (req, res) => {
    try {
        const { product, quantity, Inputprice, discount } = req.body;

        if (!product || !quantity || !Inputprice || !discount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find product by name
        const Getproduct = await ProductModel.findOne({ name: product });
        if (!Getproduct) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        let stock = Getproduct.stock;
        let remainingQty = quantity;

        if (stock.length === 0) {
            return res.status(400).json({ message: "Stock unavailable!" });
        }

        // FIFO stock 
        while (remainingQty > 0 && stock.length > 0) {
            if (stock[0] <= remainingQty) {
                remainingQty -= stock.shift(); // Remove the first batch
            } else {
                stock[0] -= remainingQty; // Deduct from first batch
                remainingQty = 0;
            }
        }

        // Save updated stock
        const savedStock =  await ProductModel.updateOne({ name: product }, { stock });
        //   console.log(savedStock)
        // Calculate final price
        let finalPrice = quantity * Getproduct.price;

        // Success response
        return res.status(200).json({
            message: "Order processed successfully!",
            remainingStock: stock,
            finalPrice
        });

    } catch (error) {
        console.error("Error in cartController:", error);
        return res.status(500).json({ message: "Error in Cart Product", error });
    }
};
