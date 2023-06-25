const express = require('express')
const productsRouter = express.Router()
const ProductsController = require('../controllers/products.controller')
const { isAdmin, authMiddleware } = require('../middlewares/auth.middleware')

const productsController = new ProductsController()
const { getAll, getById, addOne, updateOne, deleteOne, getByCategory } = productsController

productsRouter.get('/', getAll)
productsRouter.get('/:id', getById)
productsRouter.get('/category/:category', getByCategory)
productsRouter.post('/', [authMiddleware, isAdmin], addOne)
productsRouter.put('/:id', [authMiddleware, isAdmin], updateOne)
productsRouter.delete('/:id', [authMiddleware, isAdmin], deleteOne)

module.exports = productsRouter
