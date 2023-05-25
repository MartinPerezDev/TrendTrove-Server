const express = require('express')
require('dotenv').config()
const apiRouter = require('./routes/index.router')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = app.listen(PORT, () => console.log(`Server up in port: ${PORT}`))
server.on('error', error => console.log(`Error in server ${error.message}`))

app.use('/api', apiRouter)
