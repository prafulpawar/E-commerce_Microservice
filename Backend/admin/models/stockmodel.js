const mongoose = require('mongoose')
const stockSchema = new mongoose.Schema({

    
    stock: [
        {
            quantity: {
                type: Number,
                required: true
            }
        }
    ],

    warehouse: { type: String }

})

const stockModel = mongoose.model('product', stockSchema);
module.exports = stockModel