'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Message, { foreignKey: 'senderId' })
      Users.hasMany(models.Conversation, { foreignKey: 'userId' })
      Users.belongsToMany(models.Conversation, { through: 'Participants' })
    }
  }
  Users.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    validEmail: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true,
    deletedAt
  });
  return Users;
};