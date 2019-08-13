const PostReactionService = require("../services/PostReactionService");

module.exports = {
  async totalsByPost(req, res) {
    try {

        const { postId } = req.params;

        res.send(await PostReactionService.getTotalReactionsByPost(postId));

    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }
};
