const express = require('express')
const usersRouter = express.Router()
const UsersController = require('../controllers/users.controller')

const usersController = new UsersController()
const { signup, login, getUserByToken } = usersController

usersRouter.post('/signup', signup)
usersRouter.post('/login', login)
usersRouter.post('/', getUserByToken)

module.exports = usersRouter
