'use strict'

module.exports = function (sequelize, DataTypes) {
    const bev = sequelize.define('bev', {
      bev_category: {
        text: DataTypes.STRING
      },
      bev_type: {
        text: DataTypes.STRING
      },
      bev_name: {
        text: DataTypes.STRING
      },
      bev_abv: {
        text: DataTypes.STRING
      },
      bev_ibu: {
        text: DataTypes.STRING
      },
      bev_country: {
        text: DataTypes.STRING
      },
      bev_maker: {
        text: DataTypes.STRING
      },
      bev_descr: {
        text: DataTypes.TEXT
      },
      bev_organic: {
          text: DataTypes.Boolean
      },
      bev_img: {
          text: DataTypes.TEXT
      }
    })
    return bev
  }
  