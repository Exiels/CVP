const express = require('express')
const cors = require('cors')
const RateLimit = require('express-rate-limit');

const app = express()
const port = process.env.EXPRESS_PORT
const router = require('./routes/router.js')
const { dbConnection } = require('./config/db')

/**
 * Set limiter
 */
var limiter = RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 20
})

/**
 * Start the Node.Js server
 */
async function startServer () {
  // Call connection to Database
  const dbCo = await dbConnection('cvp')

  // Start the server if database connection is good
  if (dbCo) {
    try {
      // Setup express and cors
      app.use(limiter)
      app.use(express.json())
      app.use(cors({ 
        credentials: true,
        origin: '*',
        allowedHeaders: '*' }))

      // Init router
      app.use('/', router)

      // Start server
      app.listen(port, () => {
        console.log(`INFO: CVP Backend listening at http://localhost:${port}`)
      })
    } catch (error) {
      console.error('ERROR: index.js error : ', error)
    }
  }
}

startServer()
