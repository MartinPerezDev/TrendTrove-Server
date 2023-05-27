const ProductsDAO = require('../db/daos/productsDAO')

class ProductsController {
  constructor () {
    this.products = new ProductsDAO()
  }

  handleResponde (res, status, message, data = {}) {
    return res.status(status).json({ message, data })
  }

  getProducts = async (req, res) => {
    try {
      const products = await this.products.get()
      this.handleResponde(res, 200, 'get all products', products)
    } catch (error) {
      this.handleResponde(res, 500, error.message)
    }
  }

  getProductById = async (req, res) => {
    try {
      const { id } = req.params
      const product = await this.products.getById(id)
      product
        ? this.handleResponde(res, 200, 'get product by id', product)
        : this.handleResponde(res, 404, 'product not found')
    } catch (error) {
      this.handleResponde(res, 500, error.message)
    }
  }

  getProductsByCategory = async (req, res) => {
    try {
      const { category } = req.params
      const products = await this.products.getByCategory(category)
      products
        ? this.handleResponde(res, 200, 'get products by category', products)
        : this.handleResponde(res, 404, 'products not found')
    } catch (error) {
      this.handleResponde(res, 500, error.message)
    }
  }

  addProduct = async (req, res) => {
    try {
      const product = await this.products.add(req.body)
      this.handleResponde(res, 201, 'product added', product)
    } catch (error) {
      this.handleResponde(res, 500, error.message)
    }
  }

  updateProduct = async (req, res) => {
    try {
      const { id } = req.params
      const product = await this.products.update(id, req.body)
      product
        ? this.handleResponde(res, 200, 'product updated', product)
        : this.handleResponde(res, 404, 'product not found')
    } catch (error) {
      this.handleResponde(res, 500, error.message)
    }
  }

  deleteProduct = async (req, res) => {
    try {
      const { id } = req.params
      const product = await this.products.delete(id)
      product
        ? this.handleResponde(res, 200, 'product deleted', product)
        : this.handleResponde(res, 404, 'product not found')
    } catch (error) {
      this.handleResponde(res, 500, error.message)
    }
  }
}

module.exports = ProductsController
