'use strict'

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('user', {
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
  return user
}
