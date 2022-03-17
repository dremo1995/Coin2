const controllers = require("../controllers/");
const router = require("express").Router();

const { auth } = require("../utils");

router.get("/", controllers.tutorials.get);
router.post("/:id", auth(), controllers.tutorials.post);
router.put("/:id", auth(), controllers.tutorials.put);
router.delete("/:id", auth(), controllers.tutorials.delete);

module.exports = router;
