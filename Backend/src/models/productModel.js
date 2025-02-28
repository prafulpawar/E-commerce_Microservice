const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
      maxlength: 100,
    },
    image: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    quantity: {
      type: Number,
      // required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        comment: String,
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);




productSchema.index({ name: 'text', description: 'text' });

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;