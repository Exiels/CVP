/**
 * @memberof module:router~mainRouter~administrationRouter
 * @inner
 * @namespace competencies
 */
const { Competencies, validateCompetencies } = require('../../models/competencies')

/**
 * Get competencies function
 * @name GET /administration/competencies
 * @function
 * @memberof module:router~mainRouter~administrationRouter~competencies
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK and return all competencies in db
 * @returns 500 if Internal Server Error
 */
exports.getCompetencies = async (req, res) => {
  try {
    return res.status(200)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

/**
 * Add competencies function
 * @name POST /administration/competencies
 * @function
 * @memberof module:router~mainRouter~administrationRouter~competencies
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.postCompetencies = async (req, res) => {
  try {
    return res.status(201)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

/**
 * Remove competencies function
 * @name DELETE /administration/competencies
 * @function
 * @memberof module:router~mainRouter~administrationRouter~competencies
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.deleteCompetencies = async (req, res) => {
  try {
    return res.status(200)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}