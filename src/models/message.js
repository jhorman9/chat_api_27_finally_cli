'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Users, { foreignKey: 'senderId' });
      Message.belongsTo(models.Conversation, { foreignKey: 'conversationId' });
    }
  }
  Message.init({
    content: DataTypes.TEXT,
    senderId: DataTypes.INTEGER,
    conversationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
    paranoid: true,
    deletedAt
  });
  return Message;
};