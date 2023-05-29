const mongoose = require('mongoose')

const variantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true }
})

const productSchema = new mongoose.Schema({
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
  },
  price: { type: Number, required: true }
})

const OrderSchema = new mongoose.Schema({
  products: {
    type: [productSchema],
    validate: {
      validator: function (products) {
        return products.length > 0
      },
      message: 'Order must have at least one product'
    }
  }
},
{ timestamps: true }
)

const orderSchema = mongoose.model('orders', OrderSchema)

module.exports = orderSchema
