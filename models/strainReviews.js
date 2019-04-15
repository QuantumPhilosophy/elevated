'use strict'

module.exports = function (sequelize, DataTypes) {
  const strain_review = sequelize.define('strain_review', {
    user_id: {
      type: DataTypes.INTEGER
    },
    strain_id: {
      type: DataTypes.STRING
    },
    strain_review: {
      type: DataTypes.TEXT
    },
    strain_rating: {
      type: DataTypes.INTEGER
    }
  })
  return strain_review
}
