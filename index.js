const express = require('express');
const { config } = require('./config/index')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/json', (req, res) => {
    res.json({hello: 'Hola Mundo'})
})

app.listen(config.port, () => {
    console.log(`Escuchando en http://localhost:${config.port}`)
})