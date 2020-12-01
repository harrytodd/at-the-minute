const express = require('express')
const userController = require('./controllers/userController')
const itemController = require('./controllers/itemController')
const secureRoute = require('./middleware/secureRoute')
const router = express.Router()

router.route('/login')
  .post(userController.logIn)

router.route('/users')
  .get(secureRoute, userController.getUsers)

router.route('/items')
  .get(secureRoute, itemController.getItems)
  .post(secureRoute, itemController.addItem)

router.route('/items/:itemID')
  .put(secureRoute, itemController.editItem)
  .delete(secureRoute, itemController.removeItem)
  .get(secureRoute, itemController.getSingleItem)

module.exports = router