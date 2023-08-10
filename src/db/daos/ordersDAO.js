const orderSchema = require('../models/order.model')
const BaseModelDAO = require('./baseModelDAO')

class OrdersDAO extends BaseModelDAO {
  constructor () {
    super(orderSchema)
  }

  async getByEmail (email) {
    try {
      return await this.schema.find({ 'user.email': email })
    } catch (error) {
      throw new Error(`Error getting ${this.nameSchema} by email - ${error.message}`)
    }
  }
}

module.exports = OrdersDAO
