const { Post } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const PostComment = sequelize.define("PostComment", {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "postId"
      }
    },
    comment: DataTypes.STRING,
    commentDate: DataTypes.DATE
  });

  return PostComment;
};
