/**
 * @memberof module:router~mainRouter~administrationRouter
 * @inner
 * @namespace user
 */
const { Users, validateUser } = require('../../models/users')

/**
 * Get user function
 * @name GET /administration/user
 * @function
 * @memberof module:router~mainRouter~administrationRouter~user
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 200 if OK and return username
 * @returns 500 if Internal Server Error
 */
exports.getUser = async (req, res) => {
  try {
    let users = await Users.find()
    let user

    if (users.length === 0 || users === undefined) {
        return res.status(500).json({ message: 'Internal Server Error' })
    } else {
        user = users[0]
    }
    return res.status(200).json({
      user: {
        username: user.username
      }
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

/**
 * Patch user function
 * @name PATCH /administration/user
 * @function
 * @memberof module:router~mainRouter~administrationRouter~user
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.patchUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body)
    if (error) { return res.status(400).send(error.details[0].message)}
    let users = await Users.find()

    if (users.length === 0 || users === undefined) {
        return res.status(500).json({ message: 'Internal Server Error' })
    } else {
        users[0].username = req.body.username
        users[0].password = req.body.password

        await users[0].save()
    }
    return res.status(200).json({ message: "OK"})
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}