/**
 * @module router
 * @requires express
 */
const express = require('express')
const router = express.Router()

const sanitizer = require('../middleware/sanitize')

const userRouter = require('./user/router')
const administrationRouter = require('./administration/router')

/**
 * Main router connection
 * @namespace mainRouter
 */
router.use('/user', sanitizer, userRouter)
router.use('/administration', sanitizer, administrationRouter)

module.exports = router