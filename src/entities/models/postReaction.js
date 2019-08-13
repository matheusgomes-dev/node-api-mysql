const { Post } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const PostReaction = sequelize.define("PostReaction", {
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