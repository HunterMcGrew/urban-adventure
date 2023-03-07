// required
const router = require("express").Router();
const userRoutes = require("./Users");
const companyRoutes = require("./Company");

router.use("/users", userRoutes);
router.use("/company", companyRoutes);



module.exports = router;