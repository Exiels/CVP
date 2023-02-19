/**
 * @memberof module:router~mainRouter~administrationRouter
 * @inner
 * @namespace jobs
 */
const { Jobs, validateJob } = require('../../models/jobs')

/**
 * Get jobs function
 * @name GET /administration/jobs
 * @function
 * @memberof module:router~mainRouter~administrationRouter~jobs
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK and return all jobs in db
 * @returns 500 if Internal Server Error
 */
exports.getJobs = async (req, res) => {
  try {
    return res.status(200)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

/**
 * Add jobs function
 * @name POST /administration/jobs
 * @function
 * @memberof module:router~mainRouter~administrationRouter~jobs
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.postJobs = async (req, res) => {
  try {
    return res.status(201)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

/**
 * Remove jobs function
 * @name DELETE /administration/jobs
 * @function
 * @memberof module:router~mainRouter~administrationRouter~jobs
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.deleteJobs = async (req, res) => {
  try {
    return res.status(200)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}