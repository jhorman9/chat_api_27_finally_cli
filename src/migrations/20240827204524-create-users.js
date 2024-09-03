'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING
      },
      validEmail: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('Users');
  }
};