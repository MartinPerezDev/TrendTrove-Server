const express = require('express')
const productsRouter = express.Router()

productsRouter.get('/', (req, res) => res.send('get all products'))
productsRouter.get('/:id', (req, res) => res.send('get by id'))
productsRouter.get('/:category', (req, res) => res.send('get by category'))
productsRouter.post('/', (req, res) => res.send('add product'))
productsRouter.put('/:id', (req, res) => res.send('modified product'))
productsRouter.delete('/:id', (req, res) => res.send('delete product'))

module.exports = productsRouter
