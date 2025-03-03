const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand:{ type:String, required:true},
    
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Category',
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: { type: String },

    sku: {
        type: String,
        unique: true
    },
    images: [{ type: String }]
});

// Generate SKU before saving a product
// SKU (Stock Keeping Unit) is a unique identifier assigned to each product in inventory.
//  It helps businesses track stock levels, sales, and manage logistics efficiently.

productSchema.pre('save', function (next) {
    if (!this.sku) {
        this.sku = `${this.name.substring(0, 3).toUpperCase()}-${Date.now()}`;
    }
    next();
});




const Product = mongoose.model('Product', productSchema);
module.exports = Product;
