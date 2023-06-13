const mongoose = require('mongoose')
const productSchema = require('./product.model')

const ExtendedProductSchema = new mongoose.Schema({
  ...productSchema.schema.tree,
  variants: {
    ...productSchema.schema.tree.variants,
    type: [{
      ...productSchema.schema.tree.variants.type[0].obj,
      quantity: { type: Number, required: true }
    }]
  },
  total: { type: Number, required: true }
})

const PartialUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  shippingAddress: { type: String, required: true }
})

const OrderSchema = new mongoose.Schema({
  products: {
    type: [ExtendedProductSchema],
    required: true,
    validate: {
      validator: function (products) {
        return products.length > 0
      },
      message: 'Order must have at least one product'
    }
  },
  user: {
    type: [PartialUserSchema],
    required: true,
    validate: {
      validator: function (userOptions) {
        return userOptions.length > 1
      }
    },
    message: 'Order must have a username and email user'
  }
},
{ timestamps: true }
)

const orderSchema = mongoose.model('orders', OrderSchema)

module.exports = orderSchema
