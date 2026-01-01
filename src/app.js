const express = require('express')
const weatherRoutes = require('./routes/weatherRoutes')
const userRoutes = require('./routes/userRoutes')
const logger = require('./middleware/logger')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // 👈 ВАЖНО
app.use(logger)
app.use(express.static('public'))

app.use('/api/weather', weatherRoutes)
app.use('/api/users', userRoutes)

module.exports = app
