const UserService = require("../services/UserService");

module.exports = {
  async create(req, res) {
    try {
      const user = req.body;

      res.send(await UserService.createUser(user));

    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  },

  async update(req, res) {
    try {
      const user = req.body;

      res.send(await UserService.updateUser(user));
    } catch (e) {
      res.status(500).send({ error: e.message});
    }
  }
};
