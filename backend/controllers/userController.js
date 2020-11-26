const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function logIn(req, res) {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({ status: 'Wrong Username and/or Password' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' })
      res.status(202).send({ status: 'Login Successful', token })
    })
}

function getUsers(req, res) {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.send(err))
}

module.exports = {
  logIn,
  getUsers
}