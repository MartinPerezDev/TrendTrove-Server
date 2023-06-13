const UserDAO = require('../db/daos/usersDAO')

class UserController {
  constructor () {
    this.dao = new UserDAO()
    this.nameDao = this.constructor.name.replace('Controller', '').toLowerCase()
  }

  handleResponse = (res, status, message, data = {}) => res.status(status).json({ message, data })

  addUser = async (req, res) => {
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
}

module.exports = UserController
