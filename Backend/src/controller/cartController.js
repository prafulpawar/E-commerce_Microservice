const cartModel = require("../models/cartModel");
const userModel = require("../models/userModel");

module.exports.cartController = async (req, res) => {
   try{
        const{product,quntity,price,discount} = req.body;

        if(!product){
            return res.status(400).json({
                message:"Products Is Required"
            })
        }
        if(!quntity){
            return res.status(400).json({
                message:"Quantity Is Required"
            })
        }
        if(price){
            return res.status(400).json({
                message:"Price Is Required"
            })
        }
        if(discount){
            return res.status(400).json({
                message:"Discount Is Required"
            })
        }
         // 
        // calculate total price
        // Step Calculate DisCount
        // 



   }
   
    catch (error) {
        console.error("Error in cartController:", error);
        return res.status(500).json({ message: "Error in Cart Product", error });
    }
};
