// api routes for Company data
// /api/company route

// required
const router = require("express").Router();

const {
    getAllCompanies,
    getSingleCompany,
    createCompany,
    updateCompany,
    deleteCompany
} = require("../../controllers/company-Controller");

router.route("/")
.get(getAllCompanies)
.post(createCompany)

router.route("/:id")
.get(getSingleCompany)
.delete(deleteCompany)
.patch(updateCompany)



module.exports = router;