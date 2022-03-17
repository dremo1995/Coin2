const router = require("../routes/");

module.exports = (app) => {
  app.use("/api/user", router.user);
  app.use("*", (req, res, next) =>
    res.send("<h1>Something went Wrong Try again. :thumbsup: </h1>")
  );
};
