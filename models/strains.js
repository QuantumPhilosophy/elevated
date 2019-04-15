'use strict'

module.exports = function (sequelize, DataTypes) {
    const strain = sequelize.define('strain', {
      strain_name: {
        type: DataTypes.STRING
      },
      strain_race: {
        type: DataTypes.STRING
      },
      strain_flavor: {
        type: DataTypes.TEXT
      },
      strain_positive: {
        type: DataTypes.TEXT
      },
      strain_negative: {
        type: DataTypes.TEXT
      },
      strain_medical: {
        type: DataTypes.TEXT
      },
      strain_descr: {
        type: DataTypes.TEXT
      },
      strain_img: {
          type: DataTypes.TEXT
      }
    })
    return strain
  }
  