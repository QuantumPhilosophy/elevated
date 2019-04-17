'use strict'

const db = require('../models')

module.exports = function (app) {
  // Load strains page to view all strains
  app.get('/strains', function (req, res) {
    db.strain.findAll({}).then(function (strains) {
      res.render('strains', {

      })
    })
  })

  // Load bevs page to view all bevs
  app.get('/bevs', function (req, res) {
    db.strain.findAll({}).then(function (strains) {
      res.render('bevs', {

      })
    })
  })

  app.get('/members', function (req, res) {
    db.strain.findAll({}).then(function (strains) {
      res.render('members', {

      })
    })
  })

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404')
  })
}
