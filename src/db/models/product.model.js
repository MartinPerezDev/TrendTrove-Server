const mongoose = require('mongoose')

const variantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: [String],
  size: [String]
})

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: [String], required: true },
  variants: {
    type: [variantSchema],
    validate: {
      validator: function (variants) {
        return variants.length > 0
      },
      message: 'Product must have at least one variant'
    }
  }
},
{ timestamps: true }
)

const productSchema = mongoose.model('products', ProductSchema)

module.exports = productSchema
