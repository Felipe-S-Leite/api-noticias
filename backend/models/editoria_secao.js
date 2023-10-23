'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editoria_Secao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Editoria_Secao.init({
    nome_da_editoria: DataTypes.STRING,
    descricao_da_editoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Editoria_Secao',
  });
  return Editoria_Secao;
};