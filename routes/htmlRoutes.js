'use strict'

const db = require('../models')

module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    db.bev_review.findAll({}).then(function (bevReview) {
      res.render('index', {
        msg: 'Welcome to Elevate!',
        reviews: bevReview
      })
    })
  })

  // Load example page and pass in an example by id
  app.get('/review/:id', function (req, res) {
    db.strain_review.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (strainRev) {
      res.render('example', {
        review: strainRev
      })
    })
  })

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404')
  })
}
