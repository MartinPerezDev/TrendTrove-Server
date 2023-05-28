const express = require('express')
const productsRouter = express.Router()
const ProductsController = require('../controllers/products.controller')

const productsController = new ProductsController()
const { getAll, getById, addOne, updateOne, deleteOne, getByCategory } = productsController

productsRouter.get('/', getAll)
productsRouter.get('/:id', getById)
productsRouter.get('/category/:category', getByCategory)
productsRouter.post('/', addOne)
productsRouter.put('/:id', updateOne)
productsRouter.delete('/:id', deleteOne)

module.exports = productsRouter
