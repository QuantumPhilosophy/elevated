'use strict'

module.exports = function (sequelize, DataTypes) {
  const bev_review = sequelize.define('bev_review', {
    user_id: {
      type: DataTypes.INTEGER
    },
    bev_id: {
      type: DataTypes.STRING
    },
    bev_review: {
      type: DataTypes.TEXT
    },
    bev_rating: {
      type: DataTypes.INTEGER
    }
  })
  return bev_review
}