const express = require('express')
const router = express.Router()

const auth = require('../../middleware/auth')

const competencies = require('./competencies')
const contact = require('./contact')
const github = require('./github')
const jobs = require('./jobs')
const user = require('./user')

/**
 * Administration router connection
 * @memberof module:router~mainRouter
 * @inner
 * @namespace administrationRouter
 */

router.get('/competencies', competencies.getCompetencies)
router.post('/competencies', auth, competencies.postCompetencies)
router.delete('/competencies', auth, competencies.deleteCompetencies)

router.get('/contact', contact.getContact)
router.patch('/contact', auth, contact.patchContact)

router.get('/github', github.getRepos)

router.get('/jobs', jobs.getJobs)
router.post('/jobs', auth, jobs.postJobs)
router.delete('/jobs', auth, jobs.deleteJobs)

router.get('/user', user.getUser)
router.patch('/user', auth, user.patchUser)

module.exports = router