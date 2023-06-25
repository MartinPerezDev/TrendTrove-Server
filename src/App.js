const express = require('express')
require('dotenv').config()
const connectDb = require('./db/connection')
const apiRouter = require('./routes/index.router')
const cors = require('cors')
const initializePassport = require('./utils/passport')
const passport = require('passport')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: '*'
}))

initializePassport()
app.use(passport.initialize())
connectDb()
const server = app.listen(PORT, () => console.log(`Server up in port: ${PORT}`))
server.on('error', error => console.log(`Error in server ${error.message}`))

app.use('/api', apiRouter)
