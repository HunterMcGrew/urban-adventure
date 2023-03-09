// required
const router = require("express").Router();
const userRoutes = require("./Users");
const companyRoutes = require("./Company");
const positionRoutes = require("./Position");

router.use("/users", userRoutes);
router.use("/company", companyRoutes);
router.use("/position", positionRoutes);



module.exports = router;