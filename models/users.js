'use strict'

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    user_name: {
      type: DataTypes.STRING
    },
    user_pass: {
      type: DataTypes.STRING
    },
    user_dob: {
      type: DataTypes.STRING
    },
    user_email: {
      type: DataTypes.STRING
    }
  })
  return User
}