const mongoose = require('mongoose')

const { dbName, dbPort, dbHost, dbUser, dbPass } = require('../app/config')

mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

const db = mongoose.connection

module.exports = db
