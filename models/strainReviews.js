'use strict'

module.exports = function (sequelize, DataTypes) {
    const strain_review = sequelize.define('strain_review', {
      user_id: {
        type: DataTypes.INT
      },
      strain_id: {
        type: DataTypes.STRING
      },
      strain_review: {
        type: DataTypes.TEXT
      },
      strain_rating: {
        type: DataTypes.INT
      }
    })
    return strain_review
  }