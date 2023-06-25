const passport = require('passport')

const authMiddleware = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.status(401).json({ message: 'Unauthorized' })
    req.user = user
    next()
  })(req, res, next)
}

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: 'Forbidden' })
  next()
}

module.exports = { authMiddleware, isAdmin }
