'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NotificacaoDeNovasNoticias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_de_notificacao: {
        type: Sequelize.DATE
      },
      estado_da_noticacao_lida_nao_lida: {
        type: Sequelize.BOOLEAN
      },
      leitores_a_serem_notificados: {
        type: Sequelize.INTEGER
      },
      tipo_de_notificacao_novo_artigo_atualizacao_etc_: {
        type: Sequelize.STRING
      },
      idNoticia: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NotificacaoDeNovasNoticias');
  }
};