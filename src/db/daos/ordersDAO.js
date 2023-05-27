const orderSchema = require('../models/order.model')
const BaseModelDAO = require('./baseModelDAO')

class OrdersDAO extends BaseModelDAO {
  constructor () {
    super(orderSchema)
  }
}

module.exports = OrdersDAO
