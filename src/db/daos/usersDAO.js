const userSchema = require('../models/user.model')

const { createHash } = require('../../utils/bcrypt')

class UserDAO {
  constructor () {
    this.schema = userSchema
    this.nameSchema = this.constructor.name.replace('DAO', '').toLowerCase()
  }

  async getByEmail (email) {
    try {
      return await this.schema.findOne({ email })
    } catch (error) {
      throw new Error(`Error getting ${this.nameSchema} by email - ${error.message}`)
    }
  }

  async add (user) {
    try {
      const exist = await this.getByEmail(user.email)
      if (exist) {
        throw new Error(`User with email ${user.email} already exists`)
      }
      const newUser = {
        ...user,
        password: createHash(user.password)
      }
      return await this.schema.create(newUser)
    } catch (error) {
      throw new Error(`Error adding ${this.nameSchema} - ${error.message}`)
    }
  }
}

module.exports = UserDAO
