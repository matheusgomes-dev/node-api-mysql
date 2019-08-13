const { User } = require('../entities/models')
const hashMD5 = require("md5");
const jwt = require("jsonwebtoken");

module.exports = {
  async authenticate(email, pwd) {
    const hashPassword = hashMD5(pwd);

    const user = await User.findOne({ where: { email: email, password: hashPassword } });

    if (user === null || user === undefined)
      return { status: 400, error: 'User not find' };

    const token = jwt.sign(
      {
        userId: user.userId,
        email: user.email
      },
      process.env.SECRET,
      {
        expiresIn: 86400
      }
    );

    return token;
  }
};
