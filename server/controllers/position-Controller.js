// functions for position api calls

const Position = require("../models/Position");

// get all positions
const getAllPositions = async (req, res) => {
    try {
        const positionData = await Position.find();
        res.json(positionData);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

// get a single position
const getSinglePosition = async (req, res) => {
    try {
        const positionData = await Position.findOne({ _id: req.params.id });
        !positionData ? res.status(404).json().send("Position not found.")
        : res.status(200).json(positionData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
}

// create a new position
const createPosition = async (req, res) => {
    try {
        const positionData = await Position.create(req.body);
        res.status(200).json(positionData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};

// update position
const updatePosition = async (req, res) => {
    try {
        const positionData = await Position.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true },
        );
        !positionData ? res.status(404).json().send("Position not found.")
        : res.status(200).json(positionData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};

// delete position
const deletePosition = async (req, res) => {
    try {
        const positionData = await Position.findOneAndDelete({ _id: req.params.id });
        !positionData ? res.status(404).json().send("Position not found.")
        : res.status(200).json(positionData);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};

module.exports = {
    getAllPositions,
    getSinglePosition,
    createPosition,
    updatePosition,
    deletePosition
}