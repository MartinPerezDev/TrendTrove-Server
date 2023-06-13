const mongoose = require('mongoose')
const variantSchema = require('./variant.product.model')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: [String],
    required: true,
    validate: {
      validator: function (category) {
        return category.length > 0
      },
      message: 'Product must have at least one category'
    }
  },
  variants: {
    type: [variantSchema.schema],
    required: true,
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
