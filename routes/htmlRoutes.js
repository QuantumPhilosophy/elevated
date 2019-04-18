'use strict'

const db = require('../models')
const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function (app) {
  // Load strains page to view all strains
  app.get('/strains', isAuthenticated, function (req, res) {
    db.strain.findAll({}).then(function (strainsData) {
      console.log('------------------------------------')
      console.log('strainsData', strainsData)
      console.log('------------------------------------')
      res.render('strains', {
        strains: strainsData
      })
    })
  })

  // Load bevs page to view all bevs
  app.get('/bevs', isAuthenticated, function (req, res) {
    db.bev.findAll({}).then(function (bevsData) {
      console.log('------------------------------------')
      console.log('bevsData', bevsData)
      console.log('------------------------------------')
      res.render('bevs', {
        bevs: bevsData
      })
    })
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/members', isAuthenticated, function (req, res) {
    db.strain_review.findAll({}).then(function (strainsData) {
      db.bev_review.findAll({}).then(function (bevsData) {
        console.log('------------------------------------')
        console.log('Review Data:', strainsData)
        console.log('------------------------------------')
        console.log('------------------------------------')
        console.log('Review Data:', bevsData)
        console.log('------------------------------------')
        res.render('members', {
          wishlistData: {
            strainsWishlist: strainsData,
            bevsWishlist: bevsData
          }
        })
      })
    })
  })

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404')
  })
}
