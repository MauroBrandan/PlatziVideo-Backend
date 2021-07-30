const express = require('express')
const { config } = require('./config/index')
const moviesApi = require('./routes/movies')
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers')

const app = express()
app.use(express.json())

moviesApi(app)

app.use(logErrors)
app.use(errorHandler)

app.listen(config.port, () => {
	console.log(`Escuchando en http://localhost:${config.port}`)
})
