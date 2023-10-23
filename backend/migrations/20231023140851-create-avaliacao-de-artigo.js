'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AvaliacaoDeArtigos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artigo_avaliado_referencia_ao_artigo_: {
        type: Sequelize.INTEGER
      },
      pontuacao_estrelas_: {
        type: Sequelize.FLOAT
      },
      comentarios: {
        type: Sequelize.STRING
      },
      data_da_avaliacao: {
        type: Sequelize.DATE
      },
      idusuario: {
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
    await queryInterface.dropTable('AvaliacaoDeArtigos');
  }
};