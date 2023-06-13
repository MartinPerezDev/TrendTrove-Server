const mongoose = require('mongoose')
const productSchema = require('./product.model')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  shippingAddress: { type: String, default: '' },
  wishlist: {
    type: [productSchema.schema],
    default: []
  }
}, { timestamps: true })

const userSchema = mongoose.model('users', UserSchema)

module.exports = userSchema
