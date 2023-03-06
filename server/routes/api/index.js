// required
const router = require("express").Router();
const userRoutes = require("./Users");
// add api route vars here

// router.use("/name", varName);

router.use("/users", userRoutes);

module.exports = router;