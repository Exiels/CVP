/**
 * @memberof module:router~mainRouter~userRouter
 * @inner
 * @namespace checkLogin
 */
const { Users, validateUser } = require('../../models/users')

/**
 * Main check Login function
 * @name GET /user/checkLogin
 * @function
 * @memberof module:router~mainRouter~userRouter~checkLogin
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 200 if OK and return access token and role name
 */
module.exports = async (req, res) => {
  try {
    return res.status(200).json({message: "OK"})
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}