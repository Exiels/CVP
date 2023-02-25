const express = require('express')
const router = express.Router()

const login = require('./login')

/**
 * User router connection
 * @memberof module:router~mainRouter
 * @inner
 * @namespace userRouter
 */

// Created router routes connection
router.post('/login', login)

module.exports = router