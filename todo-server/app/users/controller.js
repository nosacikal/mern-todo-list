const User = require('./model')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config')
const { getToken } = require('../utils/get-token')

const me = async (req, res, next) => {
  if (!req.user) {
    return res.json({
      error: 1,
      message: 'Anda tidak login atau token kadaluarsa',
    })
  }

  return res.json(req.user)
}

const register = async (req, res, next) => {
  try {
    const payload = req.body

    const user = new User(payload)
    await user.save()

    return res.json(user)
  } catch (error) {
    if (error && error.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: error.message,
        fields: error.errors,
      })
    }

    next(error)
  }
}

const localStrategy = async (username, password, done) => {
  try {
    let user = await User.findOne({ username }).select(
      '-__v -createdAt -updatedAt -token'
    )

    if (!user) return done()

    if (bcrypt.compareSync(password, user.password)) {
      ;({ password, ...userWithoutPassword } = user.toJSON())

      return done(null, userWithoutPassword)
    }
  } catch (error) {
    done(error, null)
  }

  done()
}

const login = async (req, res, next) => {
  passport.authenticate('local', async function (err, user) {
    if (err) return next(err)

    if (!user)
      return res.json({ error: 1, message: 'Username atau password salah' })

    let signed = jwt.sign(user, config.secretKey)

    await User.findOneAndUpdate(
      { _id: user._id },
      { $push: { token: signed } },
      { new: true }
    )

    return res.json({
      message: 'Logged in successfully',
      user: user,
      token: signed,
    })
  })(req, res, next)
}

const logout = async (req, res, next) => {
  let token = getToken(req)

  let user = await User.findOneAndUpdate(
    { token: { $in: [token] } },
    { $pull: { token } },
    { new: true }
  )

  if (!user || !token) {
    return res.json({
      error: 1,
      message: 'User tidak ditemukan',
    })
  }

  return res.json({
    error: 1,
    message: 'Logout berhasil',
  })
}

module.exports = {
  register,
  localStrategy,
  login,
  me,
  logout,
}
