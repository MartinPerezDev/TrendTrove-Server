const mongoose = require('mongoose')

const ExtendedProductSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  _idVariant: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  size: { type: String, required: true },
  total: { type: Number, required: true }
})

const PartialUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true }
},
{ _id: false })

const PaymentSchema = new mongoose.Schema({
  method: { type: String, required: true },
  status: { type: String, required: true },
  total: { type: Number, required: true }
},
{ _id: false })

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
    type: PartialUserSchema,
    required: true,
    validate: {
      validator: function (userOptions) {
        return userOptions !== null && typeof userOptions === 'object'
      }
    },
    message: 'Order must have a username, email and address of the user'
  },
  payment: {
    type: PaymentSchema,
    required: true,
    validate: {
      validator: function (paymentOptions) {
        return paymentOptions !== null && typeof paymentOptions === 'object'
      }
    },
    message: 'Order must have a payment method, status and total'
  }
},
{ timestamps: true }
)

const orderSchema = mongoose.model('orders', OrderSchema)

module.exports = orderSchema
