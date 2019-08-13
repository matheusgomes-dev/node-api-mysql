const { User } = require("../entities/models");
const hashMD5 = require("md5");

module.exports = {
  async createUser(user) {
    try {
      let hashPwd = hashMD5(user.password);

      const { name, email, urlProfilePhoto } = user;

      return await User.create({
        name,
        email,
        password: hashPwd,
        urlProfilePhoto
      });
    } catch (e) {
      throw e;
    }
  },

  async updateUser(user) {
    try {
      const { name, urlProfilePhoto } = user;

      return await User.update(
        {
          name,
          urlProfilePhoto
        },
        {
          where: { userId: user.userId }
        }
      );
    } catch (e) {
      throw e;
    }
  },

  async getUserById(userId) {
    try {
      
      return await User.findByPk(userId);

    } catch (e) {
      throw e;
    }
  }
};
