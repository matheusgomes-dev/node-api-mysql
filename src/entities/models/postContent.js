const { Post } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const PostContent = sequelize.define("PostContent", {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "postId"
      }
    },
    archiveUrl: DataTypes.STRING,
    videoThumbnailUrl: DataTypes.STRING
  });

  return PostContent;
};
