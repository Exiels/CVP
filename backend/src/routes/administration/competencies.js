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
 * @returns 200 if OK and return all competencies in db
 * @returns 500 if Internal Server Error
 */
exports.getCompetencies = async (req, res) => {
  try {
    let competencies = await Competencies.find()

    return res.status(200).json({competencies})
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
 * @returns 201 if OK
 * @returns 500 if Internal Server Error
 */
exports.postCompetencies = async (req, res) => {
  try {
    const { error } = validateCompetencies(req.body)
    if (error) { return res.status(400).send(error.details[0].message)}
    
    const competence = new Competencies(req.body)
    await competence.save();
    return res.status(201).json({ message: 'OK'})
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
 * @returns 404 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.deleteCompetencies = async (req, res) => {
  try {
    const competence = await Competencies.findById(req.body.id)

    if (competence === undefined || competence.length === 0)
      return res.status(404).json({ message: 'Competence not found' })
    else {
      await Competencies.findByIdAndRemove(req.body.id)
    }
    return res.status(200).json({ message: 'OK' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}