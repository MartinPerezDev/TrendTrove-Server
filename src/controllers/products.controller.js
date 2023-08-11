const ProductsDAO = require('../db/daos/productsDAO')
const BaseController = require('./base.controller')

class ProductsController extends BaseController {
  constructor () {
    super(ProductsDAO)
  }

  getByCategory = async (req, res) => {
    try {
      const { category } = req.params
      const products = await this.dao.getByCategory(category)
      products.length
        ? this.handleResponse(res, 200, `get ${this.nameDao} by category`, products)
        : this.handleResponse(res, 404, `${this.nameDao} by category not found`)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }
}

module.exports = ProductsController
