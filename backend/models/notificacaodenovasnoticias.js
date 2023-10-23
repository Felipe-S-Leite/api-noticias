'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificacaoDeNovasNoticias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificacaoDeNovasNoticias.init({
    data_de_notificacao: DataTypes.DATE,
    estado_da_noticacao_lida_nao_lida: DataTypes.BOOLEAN,
    leitores_a_serem_notificados: DataTypes.INTEGER,
    tipo_de_notificacao_novo_artigo_atualizacao_etc_: DataTypes.STRING,
    idNoticia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NotificacaoDeNovasNoticias',
  });
  return NotificacaoDeNovasNoticias;
};