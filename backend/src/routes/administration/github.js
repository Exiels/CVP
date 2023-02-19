/**
 * @memberof module:router~mainRouter~administrationRouter
 * @inner
 * @namespace github
 */

/**
 * Get github repos function
 * @name GET /administration/github
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
exports.getRepos = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}