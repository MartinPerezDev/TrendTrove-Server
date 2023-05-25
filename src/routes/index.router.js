const express = require('express')
const apiRouter = express.Router()
const productsRouter = require('./products.router')

apiRouter.use('/products', productsRouter)

module.exports = apiRouter
