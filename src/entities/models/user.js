const { Post } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      urlProfilePhoto: DataTypes.STRING
    },
    {
      timestamps: false
    },
    /* {
      classMethods: {
        associate: function(models) {
          User.hasMany(Post, { as: 'Posts', foreignKey: 'userId' });
        }
      }
    } */
  );

  return User;
};
