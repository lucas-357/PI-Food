const { DataTypes } = require('sequelize');
//Este código exporta una definición de modelo para una tabla llamada recipe en una base de datos Sequelize.
module.exports = (sequelize) => {
  sequelize.define('recipe', {
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
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.FLOAT,
    },
    healthScore: {
      type: DataTypes.FLOAT,
    },
    image: {
      type: DataTypes.STRING
    },
    steps: {
      type: DataTypes.STRING,
    },
  },
    { timestamps: false }
  );
};
