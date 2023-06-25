const express = require('express')
const usersRouter = express.Router()
const UsersController = require('../controllers/users.controller')
const { authMiddleware } = require('../middlewares/auth.middleware')

const usersController = new UsersController()
const { signup, login, getUserByToken } = usersController

usersRouter.post('/signup', signup)
usersRouter.post('/login', login)
usersRouter.get('/', authMiddleware, getUserByToken)

module.exports = usersRouter
