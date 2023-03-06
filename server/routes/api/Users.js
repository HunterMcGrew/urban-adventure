// api routes for User data
// /api/user route

// required
const router = require("express").Router();
const User = require("../../models/User");

// get all users

router.get("/", (req, res) => {
    User.findAll({
        // what to include
        // include: [
        //     { model: User, as: "user" }],
        order: [
            ["id", "ASC"]]
    })
    .then((userData) => {
        res.status(200).json(userData);
    })
    .catch((error) => {
        console.error(error);
    }); 
});

// create a user

router.post("/", (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    .then((newUser) => {
        res.status(200).json(newUser);
    })
    .catch((error) => {
        console.error(error);
    });
});



module.exports = router;