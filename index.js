const express = require('express')
const { config } = require('./config/index')
const authApi = require('./routes/auth')
const moviesApi = require('./routes/movies')
const userMoviesApi = require('./routes/userMovies')
const {
	logErrors,
	errorHandler,
	wrapErrors,
} = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

const app = express()
app.use(express.json()) // Body parser

// Routes
authApi(app)
moviesApi(app)
userMoviesApi(app)

// Catch 404
app.use(notFoundHandler)

// Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
	const debug = require('debug')('app:server')
	debug(`Listening http://localhost:${config.port}`)
})
