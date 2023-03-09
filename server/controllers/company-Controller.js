// functions for user api calls

const Company = require("../models/Company");
const User = require("../models/User");

// get all companies
const getAllCompanies = async (req, res) => {
    try {
        const companyData = await Company.find();
        res.json(companyData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};

// get a single company
const getSingleCompany = async (req, res) => {
    try {
        const companyData = await Company.findOne({ _id: req.params.id });
        !companyData ? res.status(404).json().send("Company not found.") 
        : res.status(200).json(companyData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }    
};

// create a new company
const createCompany = async (req, res) => {
    try {
        const companyData = await Company.create(req.body);
        res.status(200).json(companyData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};

// update company 
const updateCompany = async (req, res) => {
    try {
        const companyData = await Company.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
            )
        !companyData ? res.status(404).json().send("Company not found.")
        : res.status(200).json(companyData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};

// delete company
const deleteCompany = async (req, res) => {
    try {
        const companyData = await Company.findOneAndDelete({ _id: req.params.id })
        !companyData ? res.status(404).json().send("Company not found.") 
        : res.status(200).json(companyData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};



module.exports = {
    getAllCompanies,
    getSingleCompany,
    createCompany,
    updateCompany,
    deleteCompany
}