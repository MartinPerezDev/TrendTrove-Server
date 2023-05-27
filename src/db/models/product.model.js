const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: [String], required: true },
  variants: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: [String],
    size: [String]
  }]
},
{ timestamps: true }
)

const productSchema = mongoose.model('products', ProductSchema)

module.exports = productSchema
