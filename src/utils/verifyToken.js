const jwtKey = "jwtKeyeeeeee";
const jws = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    return res.status(401).send({ msg: "No Token Passed" });
  }
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  jws.verify(token, jwtKey, (err, result) => {
    if (!err) {
      next();
    } else {
      return res.status(401).send({ msg: "invalid login" });
    }
  });
};

module.exports = verifyToken;
