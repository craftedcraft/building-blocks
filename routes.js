const express = require('express')

const routes = express.Router()

routes.get('/craftsmoothie', (req, res) => {
  res.send('Home route is working')
})

routes.get('/craftsmoothie/shop', (req, res) => {
  res.send('Shop route is working')
})

module.exports = routes
