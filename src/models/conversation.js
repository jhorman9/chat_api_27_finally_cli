'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Conversation.hasMany(models.Message, { foreignKey: 'ConversationId' });
      Conversation.belongsTo(models.Users, { foreignKey: 'userId' });
      Conversation.belongsToMany(models.Users, { foreignKey: 'ConversationId' });
    }
  }
  Conversation.init({
    title: DataTypes.STRING,
    conversationImage: DataTypes.STRING,
    type: DataTypes.ENUM("single", "group"),
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Conversation',
    paranoid: true,
    deletedAt
  });
  return Conversation;
};