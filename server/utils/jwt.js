const { rejects } = require("assert");
const jwt = require("jsonwebtoken");
const { resolve } = require("path/posix");
const secret = "verySecret";

function createToken(data) {
  return jwt.sign(data, secret, { expiresIn: "1h" });
}
function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

module.exports = { createToken, verifyToken };
