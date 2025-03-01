const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
   category: {
      type: String,
      required: true,
      minlength: [3, 'Minimum minlength Is 3'],
      maxlength: [50, 'Minimum minlength Is 50']
   },
   image: {
      type: String
   },
   subcategory: [
      {
         type: String,
         default:undefined
      }
   ],
})

const categoryModel = mongoose.model('category', categorySchema);
module.exports = categoryModel