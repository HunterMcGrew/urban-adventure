const router = require("express").Router();

const {
    getUsers,
    singleUser,
    createUser,
    updateUser,
    deleteUser
} = require("../../controllers/user-Controller");

// /api/users
router.route("/")
.get(getUsers)
.post(createUser)

router.route("/:id")
.get(singleUser)
.delete(deleteUser)
.patch(updateUser)


module.exports = router;