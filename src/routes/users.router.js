const express = require('express')
const usersRouter = express.Router()
const UsersController = require('../controllers/users.controller')
const { authMiddleware } = require('../middlewares/auth.middleware')

const usersController = new UsersController()
const { signup, login, getUserByToken, addProductInWishList, deleteProductInWishList, getWishListById } = usersController

usersRouter.post('/signup', signup)
usersRouter.post('/login', login)
usersRouter.get('/', authMiddleware, getUserByToken)
usersRouter.post('/wishlist', authMiddleware, addProductInWishList)
usersRouter.put('/wishlist', authMiddleware, deleteProductInWishList)
usersRouter.get('/wishlist', authMiddleware, getWishListById)

module.exports = usersRouter
