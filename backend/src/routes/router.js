/**
 * @module router
 * @requires express
 */
const express = require('express')
const router = express.Router()

const userRouter = require('./user/router')
const administrationRouter = require('./administration/router')

/**
 * Main router connection
 * @namespace mainRouter
 */
router.use('/user', userRouter)
router.use('/administration', administrationRouter)

module.exports = router