const jwt = require('jsonwebtoken')

const generateToken = (payload, secretKey, expiresIn = '24h') => {
  return jwt.sign(payload, secretKey, { expiresIn })
}

const verifyToken = (token, secretKey) => {
  try {
    return jwt.verify(token, secretKey)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  generateToken,
  verifyToken
}
