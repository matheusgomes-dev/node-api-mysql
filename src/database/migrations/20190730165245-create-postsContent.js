'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PostsContent", {
      postContentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'postId'
        }
      },
      archiveUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      videoThumbnailUrl: {
        type: Sequelize.STRING,
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("PostsContent");
  }
};
