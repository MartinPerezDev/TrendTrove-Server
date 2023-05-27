const express = require('express')
const apiRouter = express.Router()
const productsRouter = require('./products.router')
const ordersRouter = require('./orders.router')

apiRouter.use('/products', productsRouter)
apiRouter.use('/orders', ordersRouter)

module.exports = apiRouter
