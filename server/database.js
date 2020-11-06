const mongoose = require('mongoose')
const MONGO_DB = require('./environment')

// Connecting to mongoDB
const mongooseConnection = async () => {
  await mongoose.connect(MONGO_DB.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true});
  console.log(`Connected to MongoDB!`)
}

module.exports = { mongooseConnection }