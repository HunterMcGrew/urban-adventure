// api routes for Company data
// /api/company route

// required
const router = require("express").Router();
const User = require("../../models/User");
const Copmany = require("../../models/Company");

// get all companies
router.get("/", async (req, res) => {
    try {
        const companyData = await Company.findAll({
            order: [["id", "ASC"]]
        })
        res.status(200).json(companyData);
    } catch (error) {
        res.status(400).json(error);
    }
});

