'use strict'

const db = require('../models')

module.exports = function (app) {
  // Get all beverage reviews
  app.get('/api/bevReview', function (req, res) {
    db.bev_review.findAll({}).then(function (bevReview) {
      res.json(bevReview)
    })
  })

  // Create a new review
  app.post('/api/bevReview', function (req, res) {
    db.bev_review.create(req.body).then(function (bevReview) {
      res.json(bevReview)
    })
  })

  // Delete a review by id
  app.delete('/api/bevReview/:id', function (req, res) {
    db.bev_review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (bevReview) {
      res.json(bevReview)
    })
  })
}