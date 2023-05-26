const productSchema = require('../db/models/product.model')

class ProductDAO {
  constructor () {
    this.schema = productSchema
  }

  async get () {
    try {
      return await this.schema.find()
    } catch (error) {
      throw new Error('Error getting products')
    }
  }

  async getById (id) {
    try {
      return await this.schema.findById(id)
    } catch (error) {
      throw new Error('Error getting product by id')
    }
  }

  async getByCategory (category) {
    try {
      return await this.schema.find({ category })
    } catch (error) {
      throw new Error('Error getting product by category')
    }
  }

  async add (product) {
    try {
      return await this.schema.create(product)
    } catch (error) {
      throw new Error('Error adding product')
    }
  }

  async update (id, product) {
    try {
      return await this.schema.findByIdAndUpdate(id, product)
    } catch (error) {
      throw new Error('Error updating product')
    }
  }

  async delete (id) {
    try {
      return await this.schema.findByIdAndDelete(id)
    } catch (error) {
      throw new Error('Error deleting product')
    }
  }
}

const productsDAO = new ProductDAO()

module.exports = productsDAO
