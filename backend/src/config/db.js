const mongoose = require('mongoose')
const { Users } = require('../models/users')
const dbConfig = require('./db.config')

// We initialize the db with default users
async function initDefaultUsers () {
  const tmp = await Users.find({ firstName: 'admin' })

  // We check if the db is empty and if it needs to be initialized
  if (tmp === undefined || tmp.length === 0) {
    console.log('INFO: Init defaultUsers')

    // We create a default admin user
    const admin = new Users({
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123'
    })

    // Save the user admin
    await admin.save()
  }
}

async function initDB () {
  await initDefaultUsers()
}

// Database Connection

async function dbConnection (databaseName) {
  // We define the host to connect to the database
  const host = 'mongodb://' + process.env.DB_HOST + '/' + databaseName
  // We try to connect to the database
  try {
    console.log('INFO: Connection to database...')

    // Set connection parameters
    mongoose.set('strictQuery', true)
    const connectionParams = dbConfig.getConfig()

    await mongoose.connect(host, connectionParams)
    console.log('INFO: Connected to database.')

    // Init database tables
    await initDB()

    return true
  } catch (error) {
    console.log('ERROR: Could not connect to Database : ', error)
    return false
  }
}

module.exports = { dbConnection, initDB }