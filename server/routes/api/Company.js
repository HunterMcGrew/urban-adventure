// api routes for Company data
// /api/company route

// required
const router = require("express").Router();
const User = require("../../models/User");
const Company = require("../../models/Company");

// get all companies
router.get("/", async (req, res) => {
    try {
        const companyData = await Company.findAll({
            order: [["id", "ASC"]]
        })
        if (!companyData) {
            res.status(404).json({ message: "There is nothing here..." });
        }
        res.status(200).json(companyData);
    } catch (error) {
        res.status(400).json(error);
    }
});

// create a company
router.post("/", async (req, res) => {
    try {
        const companyData = await Company.create({
            company_name: req.body.company_name,
            description: req.body.description
        })
        if (!companyData) {
            res.status(404).json({ message: "This company doesn't exist" });
        }
        res.status(200).json(companyData);
        } catch (error) {
            res.status(400).json(error);
            console.error(error);
        }
});

// update company info
router.put("/:id", async (req, res) => {
    try {
        const companyData = await Company.update({
            company_name: req.body.company_name,
            description: req.body.description
        })
        if (!companyData) {
            res.status(404).json({ message: "This company doesn't exist" });
        }
        res.status(200).json(companyData);
        } catch (error) {
            res.status(400).json(error);
            console.error(error);
        }
});

// add a user as a recruiter for the company
// router.put("/:id", async (req, res) => {
//     try {
//         // going to have to find a simple, secure way to add
//         // recruiters to their company
        
//     }
// });

// delete a company
router.delete("/:id", async (req, res) => {
    try {
        const companyData = await Company.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!companyData) {
            res.status(404).json({ message: "This company doesn't exist" });
        }
        res.status(200).json(companyData);
    } catch (error) {
        res.status(400).json(error);
        console.error(error);
    }
});

module.exports = router;