const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const itemSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  sizes: { type: Array, required: true },
  price: { type: Number, required: true }
})

itemSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Item', itemSchema)