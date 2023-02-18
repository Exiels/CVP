/**
 * @module models
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

// We create the Schema for competencies and we setup the required variables

/**
 * Competencies schema, containing name and level
 * @constructor Competencies
 */
const competenciesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  }
})

// We create competencies collection from competenciesSchema
const Competencies = mongoose.model('competencies', competenciesSchema)

// We check if all required variables are here

const validateCompetencies = (competencies) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    level: Joi.string().required()
  })
  return schema.validate(competencies)
}

module.exports = { Competencies, validateCompetencies }