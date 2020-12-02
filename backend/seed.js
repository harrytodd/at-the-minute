const mongoose = require('mongoose')
const User = require('./models/userModel')
require('dotenv').config()

mongoose.connect(
  'mongodb://localhost/atmdb',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) console.log(err)
    else console.log('Mongoose connected successfully, now seeding...')
    mongoose.connection.db.dropDatabase()
      .then(() => {
        return User.create([
          { username: 'harry', email: 'harrytodd1997@gmail.com', password: `${process.env.PASSWORD}`, passwordConfirmation: `${process.env.PASSWORD}` },
          { username: 'alexia', email: '11aread1999@gmail.com', password: `${process.env.PASSWORD}`, passwordConfirmation: `${process.env.PASSWORD}` }
        ])
      })
      .then(users => console.log(`${users.length} users have been created`))
      .catch(err => console.log(err))
      .finally(() => {
        console.log('Seeding complete')
        mongoose.connection.close()
      })
  }
)