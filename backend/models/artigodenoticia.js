'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtigoDeNoticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArtigoDeNoticia.init({
    titulo: DataTypes.STRING,
    iddacategoria: DataTypes.INTEGER,
    data_de_publicacao: DataTypes.STRING,
    iddeAutor: DataTypes.INTEGER,
    imagens_videos_relacionados: DataTypes.STRING,
    tags_palavras_chave: DataTypes.STRING,
    conteudo_do_arigo: DataTypes.STRING,
    idEditora: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArtigoDeNoticia',
  });
  return ArtigoDeNoticia;
};