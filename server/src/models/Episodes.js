const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('episodes', {
    id:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull:false,
        unique:true 
    },
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    season:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    episode:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    /* character:{
      type:DataTypes.ARRAY,
      allowNull:false
    } */
   
  },{timestamp:false});
};