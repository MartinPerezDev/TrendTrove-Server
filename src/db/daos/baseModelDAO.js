class BaseModelDAO {
  constructor (schema) {
    this.schema = schema
    this.nameSchema = this.constructor.name.replace('DAO', '').toLowerCase()
  }

  async get () {
    try {
      return await this.schema.find()
    } catch (error) {
      throw new Error(`Error getting ${this.nameSchema}`)
    }
  }

  async getById (id) {
    try {
      return await this.schema.findById(id)
    } catch (error) {
      throw new Error(`Error getting ${this.nameSchema} by id`)
    }
  }

  async add (item) {
    try {
      return await this.schema.create(item)
    } catch (error) {
      throw new Error(`Error adding ${this.nameSchema}`)
    }
  }

  async update (id, item) {
    try {
      return await this.schema.findByIdAndUpdate(id, item, { new: true })
    } catch (error) {
      throw new Error(`Error updating ${this.nameSchema}`)
    }
  }

  async delete (id) {
    try {
      return await this.schema.findByIdAndDelete(id)
    } catch (error) {
      throw new Error(`Error deleting ${this.nameSchema}`)
    }
  }
}

module.exports = BaseModelDAO
