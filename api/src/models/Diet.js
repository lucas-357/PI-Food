const { DataTypes } = require('sequelize');
//Este código exporta una definición de modelo para una tabla llamada diet en una base de datos Sequelize.
module.exports = (sequelize) => {
  sequelize.define('diet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    { timestamps: false }
  );
};
