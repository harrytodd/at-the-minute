const express = require('express')
const userController = require('./controllers/userController')
// const itemController = require('./controllers/itemController')
const secureRoute = require('./middleware/secureRoute')
const router = express.Router()

router.route('/login')
  .post(userController.logIn)

router.route('/users')
  .get(userController.getUsers)


module.exports = router