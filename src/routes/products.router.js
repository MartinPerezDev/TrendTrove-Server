const express = require('express')
const productsRouter = express.Router()
const ProductsController = require('../controllers/products.controller')

const productsController = new ProductsController()
const {
  getProducts,
  getProductById,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct
} = productsController

productsRouter.get('/', getProducts)
productsRouter.get('/:id', getProductById)
productsRouter.get('/category/:category', getProductsByCategory)
productsRouter.post('/', addProduct)
productsRouter.put('/:id', updateProduct)
productsRouter.delete('/:id', deleteProduct)

module.exports = productsRouter
