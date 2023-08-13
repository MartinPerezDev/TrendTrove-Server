const express = require('express')
const usersRouter = express.Router()
const UsersController = require('../controllers/users.controller')
const { authMiddleware } = require('../middlewares/auth.middleware')

const usersController = new UsersController()
const { signup, login, getUserByToken, addProductInWishList } = usersController

usersRouter.post('/signup', signup)
usersRouter.post('/login', login)
usersRouter.get('/', authMiddleware, getUserByToken)
usersRouter.post('/wishlist', authMiddleware, addProductInWishList)

module.exports = usersRouter
