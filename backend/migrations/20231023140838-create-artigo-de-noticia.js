'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArtigoDeNoticia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      iddacategoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Categoria', key: 'id'},
        onDelete: 'CASCADE'
      },
      data_de_publicacao: {
        type: Sequelize.STRING
      },
      iddeAutor: {
        type: Sequelize.INTEGER
      },
      imagens_videos_relacionados: {
        type: Sequelize.STRING
      },
      tags_palavras_chave: {
        type: Sequelize.STRING
      },
      conteudo_do_arigo: {
        type: Sequelize.STRING
      },
      idEditora: {
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
    await queryInterface.dropTable('ArtigoDeNoticia');
  }
};