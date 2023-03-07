// functions for user api calls

const User = require("../models/User");
const Company = require("../models/Company");

// get all users
const getUsers = async (req, res) => {
    try {
        const userData = await User.find();
        res.json(userData);
    } catch (error) {
        if (error) throw error;
        res.status(500).json(error);
    }
};

// get a single user
const singleUser = async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.parmas.id })
        if (!userData) {
            res.status(404).json({ message: "That user doesn't exist..."});
        }
        res.status(200).json(userData);
    } catch (error) {
        if (error) throw error;
        res.status(500).json(error);
    }
};

// create a new user
const createUser = async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (error) {
        if (error) throw error;
        res.status(500).json(error);
    }
};

// update user
const updateUser = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate({ _id: req.params.id })
        if (!userData) {
            res.status(404).json({ message: "That user doesn't exist..." });
        }
        res.status(200).json(userData);
    } catch (error) {
        if (error) throw error;
        res.status(500).json(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const userData = await User.findOneAndDelete({ _id: req.params.id })
        if (!userData) {
            res.status(404).json({ message: "That user doesn't exist..." })
        }
        res.status(200).json(userData);
    } catch (error) {
        if (error) throw error;
        res.status(500).json(error);
    }
};



module.exports = {
    getUsers,
    singleUser,
    createUser,
    updateUser,
    deleteUser
}