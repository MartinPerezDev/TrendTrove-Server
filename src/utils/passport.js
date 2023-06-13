const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
require('dotenv').config()

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

const initializePassport = () => {
  passport.use('jwt', new JwtStrategy(jwtOptions, (payload, done) => {
    return done(null, payload)
  }))
}

module.exports = initializePassport
