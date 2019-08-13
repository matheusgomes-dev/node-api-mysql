const { PostReaction } = require("../entities/models");

module.exports = {
  async getTotalReactionsByPost(postId) {
    try {
      return await PostReaction.count({ where: { postId: postId } });
    } catch (e) {
      throw e;
    }
  }
};
