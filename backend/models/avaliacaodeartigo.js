'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvaliacaoDeArtigo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AvaliacaoDeArtigo.init({
    artigo_avaliado_referencia_ao_artigo_: DataTypes.INTEGER,
    pontuacao_estrelas_: DataTypes.FLOAT,
    comentarios: DataTypes.STRING,
    data_da_avaliacao: DataTypes.DATE,
    idusuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AvaliacaoDeArtigo',
  });
  return AvaliacaoDeArtigo;
};