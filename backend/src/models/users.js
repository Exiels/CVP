/**
 * @module models
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')
const Joi = require('joi')

// We create the Schema for users and we setup the required variables

/**
 * Users schema, containing username and password
 * @constructor Users
 */
const usersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// We generate an auth token for user
usersSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
  return token
}

// We create users collection from usersSchema
const Users = mongoose.model('users', usersSchema)

// We check if all required variables are here

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
  return schema.validate(user)
}

module.exports = { Users, validateUser }