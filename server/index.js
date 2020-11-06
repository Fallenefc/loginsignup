// import { mongooseConnection } from './database'

const express = require('express');
const cors = require('cors')
const router = require('./router')
const bodyParser = require('body-parser')
const mongooseConnection = require('./database')

const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.listen(5000, () => {
  mongooseConnection.mongooseConnection();
  console.log(`Server running on http://localhost:5000`)
});