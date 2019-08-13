const { Post } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const PostReaction = sequelize.define("PostReaction", {
    postReactionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "postId"
      }
    },
    type: DataTypes.INTEGER,
    reactionDate: DataTypes.DATE
  });

  return PostReaction;
};
