const express = require('express')
const router = express.Router()
const os = require('os')
const multer = require('multer')
const upload = multer({ dest: os.tmpdir() })

const competencies = require('./competencies')
const contact = require('./contact')
const jobs = require('./jobs')

/**
 * Administration router connection
 * @memberof module:router~mainRouter
 * @inner
 * @namespace administrationRouter
 */

router.post('/competencies', competencies)
router.post('/contact', contact)
router.get('/jobs', jobs)

module.exports = router