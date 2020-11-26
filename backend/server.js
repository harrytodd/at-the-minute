const express = require('express')
const Router = require('./router')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressServer = express()
const { port } = require('./config/environment')

mongoose.connect(
  'mongodb://localhost/atmdb',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) console.log(err)
    else console.log('Mongoose connected successfully')
  }
)

expressServer.use((req, res, next) => {
  console.log(`Incoming request, ${req.method} to ${req.url}`)
  next()
})

expressServer.use(bodyParser.json())

expressServer.use('/api', Router)

expressServer.listen(port)