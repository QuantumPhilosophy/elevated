'use strict'

const db = require('../models')

module.exports = function (app) {
  // Get all beverage reviews
  app.get('/api/bevReview', function (req, res) {
    db.bev_review.findAll({}).then(function (bevReview) {
      res.json(bevReview)
    })
  })

  // Create a new bev review
  app.post('/api/bevReview', function (req, res) {
    db.bev_review.create(req.body).then(function (bevReview) {
      res.json(bevReview)
    })
  })

  // Select a bev review by id
  app.get('/api/bevReview/:id', function (req, res) {
    db.bev_review.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (bevReview) {
      res.json(bevReview)
    })
  })
  // Delete a bev review by id
  app.delete('/api/bevReview/:id', function (req, res) {
    db.bev_review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (bevReview) {
      res.json(bevReview)
    })
  })

  // Get all strain reviews
  app.get('/api/strainReview', function (req, res) {
    db.strain_review.findAll({}).then(function (strainReview) {
      res.json(strainReview)
    })
  })

  // Create a new strain review
  app.post('/api/strainReview', function (req, res) {
    db.strain_review.create(req.body).then(function (strainReview) {
      res.json(strainReview)
    })
  })

  // Select a strain review by id
  app.get('/api/strainReview/:id', function (req, res) {
    db.strain_review.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (strainReview) {
      res.json(strainReview)
    })
  })

  // Delete a strain review by id
  app.delete('/api/strainReview/:id', function (req, res) {
    db.strain_review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (strainReview) {
      res.json(strainReview)
    })
  })

  // Select all bevs
  app.get('/api/allBevs', function (req, res) {
    db.bev.findAll({}).then(function (bevs) {
      res.json(bevs)
    })
  })
  // Select bevs where name matches part of search input

  // Select all strains
  app.get('/api/allStrains', function (req, res) {
    db.bev.findAll({}).then(function (strains) {
      res.json(strains)
    })
  })
  // Select strains where name matches part of search input

  // Add friend to follow list
  // Add product to wishlist
  // Add product to tried list

  // Select recent reviews
  app.get('/api/recentStrainReview', function (req, res) {
    db.strain_review.findAll({
      limit: 2,
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function (strainReview) {
      res.json(strainReview)
    })
  })

  app.get('/api/recentBevReview', function (req, res) {
    db.bev_review.findAll({
      limit: 2,
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function (bevReview) {
      res.json(bevReview)
    })
  })

  // Select reviews by UserId
  app.get('/api/userBevReview/:id', function (req, res) {
    db.bev_review.findAll({
      where: {
        user_id: req.params.id
      }
    }).then(function (strainReview) {
      res.json(strainReview)
    })
  })

  app.get('/api/userStrainReview/:id', function (req, res) {
    db.strain_review.findAll({
      where: {
        user_id: req.params.id
      }
    }).then(function (strainReview) {
      res.json(strainReview)
    })
  })
}
