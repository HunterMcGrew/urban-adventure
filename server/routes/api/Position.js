// api routes for Position data
// /api/position

// required
const router = require("express").Router();


const {
    getAllPositions,
    getSinglePosition,
    createPosition,
    updatePosition,
    deletePosition
} = require("../../controllers/position-Controller");

router.route("/")
.get(getAllPositions)
.post(createPosition)

router.route("/:id")
.get(getSinglePosition)
.delete(deletePosition)
.patch(updatePosition)



module.exports = router;