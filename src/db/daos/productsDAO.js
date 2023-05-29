const productSchema = require('../models/product.model')
const BaseModelDAO = require('./baseModelDAO')

class ProductsDAO extends BaseModelDAO {
  constructor () {
    super(productSchema)
  }

  async getByCategory (category) {
    try {
      return await this.schema.find({ category })
    } catch (error) {
      throw new Error(`Error getting ${this.nameSchema} by category - ${error.message}`)
    }
  }
}

module.exports = ProductsDAO
