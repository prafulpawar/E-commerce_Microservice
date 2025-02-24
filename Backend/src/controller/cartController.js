const cartModel = require("../models/cartModel");
const userModel = require("../models/userModel");

module.exports.cartController = async (req, res) => {
    try {
        // Extract product and quantity from request body
        const { product, quantity = 1, userId } = req.body;

        if (!product || !userId) {
            return res.status(400).json({ message: "Missing required fields: product or userId" });
        }

        // Find the user's cart

        let cart = await userModel.findOne({ user: userId });


        if (!cart) {
           
            cart = new cartModel({
                user: userId,
                products: [product],
                quantity: [quantity],
                totalprice: 0, 
            });
        } else {
           
            const productIndex = cart.products.indexOf(product);

            if (productIndex !== -1) {
                
                cart.quantity[productIndex] += quantity;
            } else {
                
                cart.products.push(product);
                cart.quantity.push(quantity);
            }
        }

        // Save updated cart
        await cart.save();

        return res.status(200).json({ message: "Cart updated successfully", cart });
    } catch (error) {
        console.error("Error in cartController:", error);
        return res.status(500).json({ message: "Error in Cart Product", error });
    }
};
