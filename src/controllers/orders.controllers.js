const OrdersDAO = require('../db/daos/ordersDAO')
const BaseController = require('./base.controller')

class OrdersController extends BaseController {
  constructor () {
    super(OrdersDAO)
  }

  getByEmail = async (req, res) => {
    try {
      const email = req.email
      const orders = await this.dao.getByEmail(email)
      orders.length
        ? this.handleResponse(res, 200, `get ${this.nameDao} by email`, orders)
        : this.handleResponse(res, 404, `${this.nameDao} by email not found`)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }
}

module.exports = OrdersController
