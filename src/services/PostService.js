const { Post, User } = require("../entities/models");
const { PageSize } = require("../services/BaseService");

module.exports = {
  async getPostsFeed(offset = 0) {
    try {
      return await Post.findAndCountAll({
        offset: parseInt(offset) * parseInt(PageSize),
        limit: parseInt(PageSize)
      });
    } catch (e) {
      throw e;
    }
  },

  async getPostDetail(postId) {
    try {
      return await Post.findByPk(postId);
    } catch (e) {
      throw e;
    }
  },

  async createPost(userId, type) {
    try {
      return await Post.create({ userId, type });
    } catch (e) {
      throw e;
    }
  }
};
