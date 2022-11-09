const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('characters', {
   id:{
      type: DataTypes.UUID,
      primaryKey:true,
      allowNull:false
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    imageUrl:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          isUrl:true
        }
      },
    enemies:{
      type:DataTypes.STRING,
      allowNull:false
    },
    allies:{
      type:DataTypes.STRING,
      allowNull:false
    },
    
  },{timestsmps:false});
};
