const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.EXPRESS_PORT
const router = require('./routes/router.js')
const { dbConnection } = require('./config/db')

/**
 * Start the Node.Js server
 */
async function startServer () {
  // Call connection to Database function in the file ./config/db
  const dbCo = await dbConnection('cvp')

  // Start the server if database connection is good
  if (dbCo) {
    try {
      // Setup express and cors
      app.use(express.json())
      app.use(cors({ credentials: true, origin: true }))

      // Init router
      app.use('/', router)

      // Start server
      app.listen(port, () => {
        console.log(`CVP Backend listening at http://localhost:${port}`)
      })
    } catch (error) {
      console.error('index.js error : ', error)
    }
  }
}

startServer()
