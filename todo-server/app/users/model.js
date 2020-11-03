const mongoose = require('mongoose')
const { model, Schema } = mongoose

const bcrypt = require('bcrypt')

const HASH_ROUND = 10

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username harus diisi'],
      maxlength: [50, 'Panjang karakter username maksimal adalah 50'],
      minlength: [3, 'Panjang karakter username minimal adalah 3'],
    },
    password: {
      type: String,
      required: [true, 'Password harus diisi'],
      maxlength: [50, 'Panjang karakter Password adalah 50'],
      minlength: [4, 'Panjang karakter Password adalah 4'],
    },
    token: [String],
  },
  { timestamps: true }
)

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND)

  next()
})

userSchema.path('username').validate(
  async function (value) {
    try {
      const count = await this.model('User').countDocuments({ username: value })

      return !count
    } catch (error) {
      throw error
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
)

module.exports = model('User', userSchema)
