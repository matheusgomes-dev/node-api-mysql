const PostService = require("../services/PostService");
const UserService = require('../services/UserService');

module.exports = {
  async getFeed(req, res) {
    try {
      const { skip } = req.params;

      let posts = await PostService.getPostsFeed(skip);

      posts.rows.map(async (item, i) => {
        let user = await UserService.getUserById(item.userId);

        posts.rows[i].dataValues.user = {
          name: user.dataValues.name,
          urlProfilePhoto: user.dataValues.urlProfilePhoto          
        };

        posts.rows[i].dataValues.userLiked = false;
        posts.rows[i].dataValues.totalLikes = 10;
        posts.rows[i].dataValues.totalComments = 2;

        if (i == posts.count - 1) {
          res.send(posts);
        }
      });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },

  async getDetail(req, res) {
    try {
      const { postId } = req.params;

      res.send(await PostService.getPostDetail(postId));
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },

  async publishPost(req, res) {
    try {
      const { type } = req.body;

      res.send(await PostService.createPost(req.userId, type));
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  }
};
