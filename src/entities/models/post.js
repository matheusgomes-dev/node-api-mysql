const { User } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "userId"
        }
      },
      type: DataTypes.INTEGER,
      publishDate: DataTypes.DATE
    },
    {
      timestamps: false
    }
    /* {
      classMethods: {
        associate: function(models) {
          Post.hasOne(User, { as: "User", foreignKey: "userId" });
        }
      }
    } */
  );

  return Post;
};
