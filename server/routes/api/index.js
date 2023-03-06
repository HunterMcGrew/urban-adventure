// required
const router = require("express").Router();
const userRoutes = require("./Users");
const companyRoutes = require("./Company");
// add api route vars here

// router.use("/name", varName);

router.use("/users", userRoutes);
router.use("/companies", companyRoutes);

module.exports = router;