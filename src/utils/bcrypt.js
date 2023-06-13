const bcrypt = require('bcryptjs')

const createHash = pass => bcrypt.hashSync(pass, bcrypt.genSaltSync(10))
const passwordIsValid = (user, pass) => bcrypt.compareSync(pass, user.password)

module.exports = {
  createHash,
  passwordIsValid
}
