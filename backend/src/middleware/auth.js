/**
 * @module middlewares
 */
const jwt = require('jsonwebtoken')

/**
 * Main auth middleware function
 * @name Auth Middleware
 * @function
 * @memberof module:middlewares
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns 403 if there is no token sent
 * @returns 400 if the token is invalid
 */
module.exports = (req, res, next) => {
  try {
    // Get the auth token from the header
    const token = req.header('x-auth-token') || req.header('X-Auth-Token')
    if (!token) {
      return res.status(403).json({ message: 'Access Denied' })
    }

    // Verify the auth token with jwt
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded

    next()
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'Invalid token' })
  }
}