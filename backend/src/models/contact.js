/**
 * @module models
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

// We create the Schema for contact and we setup the required variables

/**
 * Users schema, containing firstName, lastName, email, password, and role
 * @constructor Contact
 */
const contactSchema = new Schema({
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

// We create users collection from constactSchema
const Contact = mongoose.model('contact', contactSchema)

// We check if all required variables are here

const validateContact = (contact) => {
  const schema = Joi.object({
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    position: Joi.string().required(),
    company: Joi.string().required(),
    address: Joi.string().required()
  })
  return schema.validate(contact)
}

module.exports = { Contact, validateContact }