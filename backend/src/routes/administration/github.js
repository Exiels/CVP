/**
 * @memberof module:router~mainRouter~administrationRouter
 * @inner
 * @namespace github
 */

var GitHub = require('github-api');

/**
 * Get github repos function
 * @name GET /administration/github
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
exports.getRepos = async (req, res) => {
  try {
    let data = []

    const gh = new GitHub({
      token: process.env.GHTOKEN
    })

    const me = gh.getUser(); 
    await me.listRepos(async function(err, repos) {
      await repos.forEach(element => {
        if (element.fork === false) {
          let json = {name: element.name,
            html_url: element.html_url,
            description: element.description,
            language: element.language}
          data.push(json);
        }
      })
    })
    return res.status(200).json({ data })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}