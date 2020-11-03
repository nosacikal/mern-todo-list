const router = require('express').Router()
const multer = require('multer')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const userController = require('./controller')

passport.use(new LocalStrategy(userController.localStrategy))

router.get('/me', userController.me)
router.post('/register', multer().none(), userController.register)
router.post('/login', multer().none(), userController.login)
router.post('/logout', userController.logout)

module.exports = router
