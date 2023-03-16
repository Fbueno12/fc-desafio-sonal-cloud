const express = require('express')

const app = new express()

const UserService = require('./services/UserService')

app.get('/', (req, res) => {
    res.send({message: 'Hello, world!'})
})

app.get('/users', async (req, res) => {
    res.send(await UserService.getUser())
})

module.exports = app