const express = require('express')
const usersRouter = express.Router()
const UsersController = require('../controllers/users.controller')

const usersController = new UsersController()
const { signup, login } = usersController

usersRouter.post('/signup', signup)
usersRouter.post('/login', login)

module.exports = usersRouter
