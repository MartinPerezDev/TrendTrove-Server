const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  products: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: [String], required: true },
      variants: [
        {
          name: { type: String, required: true },
          price: { type: Number, required: true },
          image: { type: String, required: true },
          size: { type: String, required: true },
          quantity: { type: Number, required: true }
        }
      ],
      price: { type: Number, required: true }
    }
  ]
},
{ timestamps: true }
)

const orderSchema = mongoose.model('orders', OrderSchema)

module.exports = orderSchema
