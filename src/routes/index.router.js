const express = require('express')
const apiRouter = express.Router()
const productsRouter = require('./products.router')
const ordersRouter = require('./orders.router')
const usersRouter = require('./users.router')

apiRouter.use('/products', productsRouter)
apiRouter.use('/orders', ordersRouter)
apiRouter.use('/users', usersRouter)

module.exports = apiRouter
