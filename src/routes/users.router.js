const express = require('express')
const usersRouter = express.Router()
const UsersController = require('../controllers/users.controller')

const usersController = new UsersController()
const { addUser } = usersController

usersRouter.post('/', addUser)

module.exports = usersRouter
