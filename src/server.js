const express = require('express')

const app = express()

const userService = require('./services/userService')

app.get('/', (req, res) => {
    res.send({message: 'Hello, world!'})
})

app.get('/users', async (req, res) => {
    res.send(await userService.getUser())
})

module.exports = app