/**
 * @module models
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

// We create the Schema for contact and we setup the required variables

/**
 * Contact schema, containing firstName, lastName, address, phone, and email
 * @constructor Contact
 */
const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
})

// We create contact collection from contactSchema
const Contact = mongoose.model('contact', contactSchema)

// We check if all required variables are here

const validateContact = (contact) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required()
  })
  return schema.validate(contact)
}

module.exports = { Contact, validateContact }