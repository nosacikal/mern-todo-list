const express = require('express')
const cors = require('cors')
const PORT = 4000
const db = require('./database')

const { decodeToken } = require('./app/users/middleware')

const app = express()

const userRouter = require('./app/users/router')
const todoRouter = require('./app/todos/router')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(decodeToken())

app.use('/auth', userRouter)
app.use('/api', todoRouter)

db.on('open', () => {
  console.log('Database connected')
  app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
  })
})

db.on('error', console.error.bind(console, 'Database error'))
