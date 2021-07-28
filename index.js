const express = require('express')
const { config } = require('./config/index')
const moviesApi = require('./routes/movies')

const app = express()
moviesApi(app)

app.listen(config.port, () => {
	console.log(`Escuchando en http://localhost:${config.port}`)
})
