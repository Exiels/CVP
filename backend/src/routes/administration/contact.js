/**
 * @memberof module:router~mainRouter~administrationRouter
 * @inner
 * @namespace contact
 */
const { Contact, validateContact } = require('../../models/contact')

/**
 * Get contact function
 * @name GET /administration/contact
 * @function
 * @memberof module:router~mainRouter~administrationRouter~contact
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 200 if OK and return all contact in db
 * @returns 500 if Internal Server Error
 */
exports.getContact = async (req, res) => {
  try {
    let contacts = await Contact.find()
    let contact

    if (contacts.length === 0 || contacts === undefined) {
      contact = new Contact({
        firstName: ".",
        lastName: ".",
        address: ".",
        phone: ".",
        email: "."
      })
      await contact.save();
    } else {
      contact = contacts[0]
    }
    return res.status(200).json({
      contact: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        address: contact.address,
        phone: contact.phone,
        email: contact.email
      }
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

/**
 * Patch contact function
 * @name PATCH /administration/contact
 * @function
 * @memberof module:router~mainRouter~administrationRouter~contact
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 400 if invalid requests
 * @returns 200 if OK
 * @returns 500 if Internal Server Error
 */
exports.patchContact = async (req, res) => {
  try {
    const { error } = validateContact(req.body)
    if (error) { return res.status(400).send(error.details[0].message)}
    let contacts = await Contact.find()

    if (contacts.length === 0 || contacts === undefined) {
      const contact = new Contact(req.body)
      await contact.save();
    } else {
      contacts[0].firstName = req.body.firstName
      contacts[0].lastName = req.body.lastName
      contacts[0].address = req.body.address
      contacts[0].phone = req.body.phone
      contacts[0].email = req.body.email

      await contacts[0].save()
    }
    return res.status(200).json({ message: "OK"})
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}