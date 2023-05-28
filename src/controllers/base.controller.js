class BaseController {
  constructor (Dao) {
    this.dao = new Dao()
    this.nameDao = this.constructor.name.replace('Controller', '').toLowerCase()
  }

  handleResponse (res, status, message, data = {}) {
    return res.status(status).json({ message, data })
  }

  getAll = async (req, res) => {
    try {
      const items = await this.dao.get()
      this.handleResponse(res, 200, `get All ${this.nameDao}`, items)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }

  getById = async (req, res) => {
    try {
      const { id } = req.params
      const item = await this.dao.getById(id)
      item
        ? this.handleResponse(res, 200, `get ${this.nameDao} by id`, item)
        : this.handleResponse(res, 404, `${this.nameDao} by id not found`)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }

  addOne = async (req, res) => {
    try {
      const item = await this.dao.add(req.body)
      this.handleResponse(res, 201, `${this.nameDao} added`, item)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }

  updateOne = async (req, res) => {
    try {
      const { id } = req.params
      const item = await this.dao.update(id, req.body)
      item
        ? this.handleResponse(res, 200, `${this.nameDao} updated by id`, item)
        : this.handleResponse(res, 404, `${this.nameDao} by id not found`)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }

  deleteOne = async (req, res) => {
    try {
      const { id } = req.params
      const item = await this.dao.delete(id)
      item
        ? this.handleResponse(res, 200, `${this.nameDao} deleted by id`, item)
        : this.handleResponse(res, 404, `${this.nameDao} by id not found`)
    } catch (error) {
      this.handleResponse(res, 500, error.message)
    }
  }
}

module.exports = BaseController
