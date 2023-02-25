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
    let jobs = await Jobs.find()

    return res.status(200).json({jobs})
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
    const { error } = validateJob(req.body)
    if (error) { return res.status(400).send(error.details[0].message)}
    
    const job = new Jobs(req.body)
    await job.save();
    return res.status(201).json({ message: 'OK'})
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
 * @returns 404 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.deleteJobs = async (req, res) => {
  try {
    const job = await Jobs.findById(req.body.id)

    if (job === undefined || job.length === 0)
      return res.status(404).json({ message: 'Job not found' })
    else {
      await Jobs.findByIdAndRemove(req.body.id)
    }
    return res.status(200).json({ message: 'OK' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}