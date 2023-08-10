const express = require('express')
const ordersRouter = express.Router()
const OrdersController = require('../controllers/orders.controllers')

const ordersController = new OrdersController()
const { getAll, getById, getByEmail, addOne, updateOne, deleteOne } = ordersController

ordersRouter.get('/', getAll)
ordersRouter.get('/:id', getById)
ordersRouter.get('/user/:email', getByEmail)
ordersRouter.post('/', addOne)
ordersRouter.put('/:id', updateOne)
ordersRouter.delete('/:id', deleteOne)

module.exports = ordersRouter
