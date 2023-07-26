const mongoose = require('mongoose')
const VariantSchema = require('./variant.product.model')

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
    type: [VariantSchema],
    required: true,
    validate: {
      validator: function (variants) {
        return variants.length > 0
      },
      message: 'Product must have at least one variant'
    }
  },
  trending: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
},
{ timestamps: true }
)

const productSchema = mongoose.model('products', ProductSchema)

module.exports = productSchema
