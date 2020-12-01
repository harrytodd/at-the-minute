const Item = require('../models/itemModel')
const axios = require('axios')

function getItems(req, res) {
  Item.find()
    .then(itemList => res.send(itemList))
    .catch(err => res.send(err))
}

function getSingleItem(req, res) {
  Item.findById(req.params.itemID)
    .then(item => res.send(item))
    .catch(err => res.send(err))
}

function addItem(req, res) {
  Item.create(req.body)
    .then(item => res.send(item))
    .catch(err => res.send(err))
}

function editItem(req, res) {
  Item.findById(req.params.itemID)
    .then(item => {
      if (!item) return res.send({ message: 'No item found' })
      item.set(req.body)
      return item.save()
    })
    .then(item => res.send(item))
    .catch(err => res.send(err))
}

function removeItem(req, res) {
  Item.findById(req.params.itemID)
    .then(item => {
      item.deleteOne()
      res.send({ message: 'Item successfully deleted' })
    })
    .catch(err => res.send(err))
}

module.exports = {
  getItems,
  getSingleItem,
  addItem,
  editItem,
  removeItem
}
