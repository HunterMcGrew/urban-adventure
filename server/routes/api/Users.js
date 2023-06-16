const router = require("express").Router();

const {
	getUsers,
	singleUser,
	createUser,
	updateUser,
	deleteUser,
	signup,
} = require("../../controllers/user-Controller");

// /api/users
router.route("/").get(getUsers).post(createUser).post(signup);

router.route("/:id").get(singleUser).delete(deleteUser).patch(updateUser);

router.route("/signup").post(signup);

module.exports = router;
