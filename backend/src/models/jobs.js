/**
 * @module models
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

// We create the Schema for jobs and we setup the required variables

/**
 * Jobs schema, containing startDate, endDate, position, company, and address
 * @constructor Jobs
 */
const jobsSchema = new Schema({
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
})

// We create jobs collection from jobsSchema
const Jobs = mongoose.model('jobs', jobsSchema)

// We check if all required variables are here

const validateJob = (job) => {
  const schema = Joi.object({
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    position: Joi.string().required(),
    company: Joi.string().required(),
    address: Joi.string().required()
  })
  return schema.validate(job)
}

module.exports = { Jobs, validateJob }