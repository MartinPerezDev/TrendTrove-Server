const mongoose = require('mongoose')

const VariantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  images: {
    type: [String],
    validate: {
      validator: function (images) {
        return images.length > 0
      },
      message: 'Variant must have at least one image'
    }
  },
  sizes: {
    type: [String],
    validate: {
      validator: function (sizes) {
        return sizes.length > 0
      },
      message: 'Variant must have at least one size'
    }
  }
},
{ timestamps: true })

const variantSchema = mongoose.model('variants', VariantSchema)

module.exports = variantSchema
