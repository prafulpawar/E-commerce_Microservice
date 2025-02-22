const categorySchema = new mongoose.Schema(
    {
      category: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      image: {
        type: String,
        default: 'https://cdn2.iconfinder.com/data/icons/graphic-design-41/48/21-photo-512.png',
      },
      description: {
        type: String,
        required: true,
        minlength: 10,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const categoryModel = mongoose.model('Category', categorySchema);
  module.exports = categoryModel;