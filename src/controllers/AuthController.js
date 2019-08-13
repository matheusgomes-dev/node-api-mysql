const jwt = require("jsonwebtoken");

const AuthService = require("../services/AuthService");

module.exports = {
  authenticate: async (req, res) => {
    try {
      const { email, password } = req.body;

      const response = await AuthService.authenticate(email, password);

      res.send({ "token": response });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  },

  verifyJWT: (req, res, next) => {
    try {
      const { token } = req.headers;

      if (token == undefined)
        return res.status(401).send({
          auth: false,
          message: "Token not exists"
        });

      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            auth: false,
            message: "Token invalid"
          });
        }

        req.email = decoded.email;
        req.userId = decoded.userId;

        next();
      });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }
};
