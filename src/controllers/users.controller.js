const UserDAO = require('../db/daos/usersDAO')
const { passwordIsValid } = require('../utils/bcrypt')
const { generateToken } = require('../utils/jwt')
require('dotenv').config()

class UserController {
  constructor () {
    this.dao = new UserDAO()
    this.nameDao = this.constructor.name.replace('Controller', '').toLowerCase()
  }

  handleResponse = (res, status, message, data = {}) => res.status(status).json({ message, data })

  signup = async (req, res) => {
    try {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
      const user = await this.dao.add(newUser)
      this.handleResponse(res, 201, 'User added', user)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }

  login = async (req, res) => {
    try {
      const { email, password } = req.body
      let user = await this.dao.getByEmail(email)
      if (!user) return this.handleResponse(res, 404, 'User not found')
      if (!passwordIsValid(user, password)) return this.handleResponse(res, 401, 'Invalid password')
      const payload = { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin }
      const token = generateToken(payload, process.env.JWT_SECRET_KEY)
      user = { ...payload, token }
      this.handleResponse(res, 200, 'User logged', user)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }

  getUserByToken = async (req, res) => {
    try {
      const user = req.user
      if (!user) return this.handleResponse(res, 404, 'User not found')
      this.handleResponse(res, 200, 'User found', user)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }

  addProductInWishList = async (req, res) => {
    try {
      const user = req.user
      const { product } = req.params
      const res = await this.dao.addProductWishList(user, product)
      this.handleResponse(res, 201, 'Product added in wish list', user)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }
}

module.exports = UserController
