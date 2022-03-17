const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 8080,
    dbURL: "mongodb+srv://andre:test1234@cluster0.n2thz.mongodb.net/Dracoin",
    authCookieName: "x-auth-token",
  },
  production: {},
};

module.exports = config[env];
