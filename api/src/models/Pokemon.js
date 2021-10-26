const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pkHp: {
      type: DataTypes.INTEGER
    },
    pkAttack: {
      type: DataTypes.INTEGER
    },
    pkDefense: {
      type: DataTypes.INTEGER
    },
   
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    pkImg:{
      type: DataTypes.STRING
    },
  });
};
