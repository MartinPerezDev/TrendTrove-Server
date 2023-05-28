const OrdersDAO = require('../db/daos/ordersDAO')
const BaseController = require('./base.controller')

class OrdersController extends BaseController {
  constructor () {
    super(OrdersDAO)
  }
}

module.exports = OrdersController
