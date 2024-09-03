'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conversations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(30)
      },
      conversationImage: {
        type: Sequelize.STRING,
        defaultValue: 'https://cdn.pixabay.com/photo/2015/11/03/09/10/meeting-1020166_1280.jpg'
      },
      type: {
        type: Sequelize.ENUM('single', 'group'),
        allowNull: false,
        defaultValue: 'single',
        comment: 'Single or group conversation'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleteAt:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Conversations');
  }
};