const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
         category:{
             type:mongoose.Types.ObjectId,
             ref:'category'
         },
         subcategory:{
             type:mongoose.Types.ObjectId,
             ref:'category'
         },
         stock: [
            {
                quantity: { type: Number, required: true },
                warehouse: { type: String } 
            }
        ]
})

const productModel = mongoose.model('product',productSchema);
module.exports = productModel