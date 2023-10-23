'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Autor.init({
    nome_do_autor: DataTypes.STRING,
    biografia: DataTypes.STRING,
    imagens_da_noticia: DataTypes.STRING,
    artigos_escritos: DataTypes.STRING,
    foto_do_autor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};