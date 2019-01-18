const express = require('express')
const fs = require('fs')
const path = require('path')

const routes = express.Router()

// tell express how it should use the body of HTTP requests
routes.use(express.static('public'))
routes.use(express.urlencoded({extended: false}))

// ??
// routes.get('/', (req, res) => {
//   res.redirect('/craftsmoothie')
// })

routes.get('/craftsmoothie', (req, res) => {
  res.send('Home route is working')
})

routes.get('/craftsmoothie/shop', (req, res) => {
  res.send('Craft Smoothie shop route is working')
})

module.exports = routes
