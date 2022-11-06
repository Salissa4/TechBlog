const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const postRoutes = require("./postRoutes.js");
const commentsRoutes = require("./commentsRoutes.js");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentsRoutes);

module.exports = router;
