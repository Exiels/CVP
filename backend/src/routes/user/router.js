const express = require('express')
const router = express.Router()

const auth = require('../../middleware/auth')

const login = require('./login')
const checkLogin = require('./checkLogin')

/**
 * User router connection
 * @memberof module:router~mainRouter
 * @inner
 * @namespace userRouter
 */

// Created router routes connection
router.get('/checkLogin', auth, checkLogin)
router.post('/login', login)

module.exports = router