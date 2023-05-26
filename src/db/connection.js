const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database connected')
  } catch (error) {
    console.log('Error connecting to database', error.message)
    process.exit(1)
  }
}

module.exports = connectDb
