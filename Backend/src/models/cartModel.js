const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: [{
        
            type: mongoose.Types.ObjectId,
            ref: "Category", 
            required: true
        
    }],
    products:[
        {
            type:String,
        }
    ],
    quantity: {
        type: Number,
        required: true,
        min: 1, 
        default: 1
    },
    totalprice: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
   
}, { timestamps: true }); 

const Cart = mongoose.model('Cart', cartSchema); 
module.exports = Cart;
