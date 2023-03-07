// required
const router = require("express").Router();
const userRoutes = require("./Users");

router.use("/users", userRoutes);



module.exports = router;