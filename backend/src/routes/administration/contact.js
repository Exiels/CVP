/**
 * @memberof module:router~mainRouter~administrationRouter
 * @inner
 * @namespace contact
 */
const { Contact, validateContact } = require('../../models/contact')

/**
 * Get contact function
 * @name GET /administration/contact
 * @function
 * @memberof module:router~mainRouter~administrationRouter~contact
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK and return all contact in db
 * @returns 500 if Internal Server Error
 */
exports.getContact = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

/**
 * Patch contact function
 * @name PATCH /administration/contact
 * @function
 * @memberof module:router~mainRouter~administrationRouter~contact
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.patchContact = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}