const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parking_lot', {
    Id_parking: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Adresse: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Total_spots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Available_spots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Open_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Close_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Id_Admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'administrateur',
        key: 'Id_Admin'
      }
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Prix_spot: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'parking_lot',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_parking" },
        ]
      },
      {
        name: "FK_proprietaire",
        using: "BTREE",
        fields: [
          { name: "Id_Admin" },
        ]
      },
    ]
  });
};
