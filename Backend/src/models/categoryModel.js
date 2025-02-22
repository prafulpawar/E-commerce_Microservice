const mongoose = require("mongoose");
const categoryController = new mongoose.Schema({
        category:{
            type:String,
            require:true
        },
        image:{
            type:String,
            default:'https://cdn2.iconfinder.com/data/icons/graphic-design-41/48/21-photo-512.png'
        },
        subcategory:{

        }
})

const categoryModel = mongoose.model('category',categoryController)
module.exports = categoryModel