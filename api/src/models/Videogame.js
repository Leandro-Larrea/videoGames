const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNUll: false,
      primaryKey: true
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    releaseDate:{
      type: DataTypes.STRING,
      allowNull: true
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: true
    },
    plataforms:{
      type: DataTypes.STRING,
      allowNull:false
    },
  });
};
// [ ] Videojuego con las siguientes propiedades:
// - ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// - Nombre *
// - Descripción *
// - Fecha de lanzamiento
// - Rating
// - Plataformas *
