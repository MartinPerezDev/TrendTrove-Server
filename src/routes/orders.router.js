const express = require('express')
const ordersRouter = express.Router()

ordersRouter.get('/', (req, res) => {
  res.send('GET /orders')
})
ordersRouter.get('/:id', (req, res) => {
  res.send('GET /orders/:id')
})
ordersRouter.post('/', (req, res) => {
  res.send('POST /orders')
})

module.exports = ordersRouter
