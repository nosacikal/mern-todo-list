const { getToken } = require('../utils/get-token')
const User = require('./model')
const jwt = require('jsonwebtoken')
const config = require('../config')

const decodeToken = () => {
  return async (req, res, next) => {
    try {
      let token = getToken(req)

      if (!token) return next()

      req.user = jwt.verify(token, config.secretKey)

      let user = await User.findOne({ token: { $in: [token] } })

      if (!user) {
        return res.json({
          error: 1,
          message: 'Token expired',
        })
      }
    } catch (error) {
      if (error && error.name === 'JsonWebTokenError') {
        return res.json({
          error: 1,
          message: error.message(),
        })
      }

      next(error)
    }

    return next()
  }
}

module.exports = {
  decodeToken,
}
