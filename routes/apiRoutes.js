'use strict'

const db = require('../models')
const Op = db.Sequelize.Op

module.exports = function (app) {
// ================================ BEV REVIEWS ==================================

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

  // ================================ STRAIN REVIEWS ====================================
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

  // ================================ SELECTING BEVS =======================================
  // Select all bevs
  app.get('/api/allBevs', function (req, res) {
    db.bev.findAll({}).then(function (bevs) {
      res.json(bevs)
    })
  })
  // Select bevs where name matches part of search input
  app.get('/api/allBevs/:name', function (req, res) {
    db.bev.findAll({
      where: {
        bev_name: {
          [Op.like]: '%' + req.params.name + '%'
        }
      }
    }).then(function (bevs) {
      res.json(bevs)
    })
  })

  // ============================== SELECTING STRAINS ====================================
  // Select all strains
  app.get('/api/allStrains', function (req, res) {
    db.strain.findAll({}).then(function (strains) {
      res.json(strains)
    })
  })
  // Select strains where name matches part of search input
  app.get('/api/allStrains/:name', function (req, res) {
    db.strain.findAll({
      where: {
        strain_name: {
          [Op.like]: '%' + req.params.name + '%'
        }
      }
    }).then(function (bevs) {
      res.json(bevs)
    })
  })

  // ===================ADD BEVS AND STRAINS TO WISH LIST AND TRIED LIST ==============================
  // Select bev by id and add to user's wishlist
  app.get('/api/addWishBev/:id', function (req, res) {
    db.bev.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (bevs) {
      let value = req.user.id
      bevs.addUser(value)
    })
  })

  // Select bev by id and add to user's tried list
  app.get('/api/addTriedBev/:id', function (req, res) {
    console.log(db.tastedBev)
    db.bev.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (bevs) {
      let value = req.user.id
      bevs.addTriedUser(value).then(associatedUsers => {
        res.json({ bevs, associatedUsers })
      })
    })
  })

  // Select strain by id and add to user's wishlist
  app.get('/api/addWishStrain/:id', function (req, res) {
    db.strain.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (strain) {
      let value = req.user.id
      strain.addUser(value)
    })
  })

  // Select strain by id and add to user's tried list
  app.get('/api/addTriedStrain/:id', function (req, res) {
    db.strain.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (strain) {
      let value = req.user.id
      strain.addTriedUser(value).then(associatedUsers => {
        res.json({ strain, associatedUsers })
      })
    })
  })

  //= ==========================   SELECT RECENT REVIEWS ========================================
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

  //= ==========================   SELECT REVIEWS BY USER ID ========================================
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

  // ========================== RETRIEVE WISHLIST AND TRIED LIST ===================================

  app.get('/api/userBevWishlist/:id', function (req, res) {
    db.User.findAll({
      include: [
        {
          model: db.bev,
          through: 'WishListBev'
        }
      ]
    }).then(users => {
      res.json(users)
    })
  })
}
// app.get('/api/addTriedStrain/:id', function (req, res) {
//   db.strain.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function (strain) {
//     let value = req.user.id
//     strain.addTriedUser(value).then(associatedUsers => {
//       res.json({ strain, associatedUsers })
//     })
//   })
// })
// TO DO ========= ADD FRIENDS
