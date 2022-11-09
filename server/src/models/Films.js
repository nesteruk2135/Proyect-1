const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('films', {
   
    
    films: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    
  },{timestsmps:false});
};
