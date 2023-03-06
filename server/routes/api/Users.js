// api routes for User data
// /api/user route

// required
const router = require("express").Router();
const User = require("../../models/User");

// need an if statement for if the user doesn't exist! 

// get all users
router.get("/", async (req, res) => {
    try {
        const userData = await User.findAll({
            // include: [{}],
            // exclude: [{}],
            order: [
                ["id", "ASC"]
            ]
        })
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
    }
});

// create a new user
router.post("/", async (req, res) => {
    try {
        const newUser = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        res.status(200).json(newUser);
        } catch (error) {
            // if the server doesn't understand request, show error
            res.status(400).json(error);
        }
    });

    // update a user
    router.put("/id", async (req, res) => {
        try {
            const userData = await User.update({
                email: req.body.email,
                password: req.body.password,
                username: req.body.username
            },
            {
                where: {
                    id: req.params.id,
                },
            })
            if (!userData) {
                res.status(404).json({ message: "This user doesn't exist" });
            }
            res.status(200).json(userData);
        } catch (error) {
            res.status(400).json(error);
        }
    });

    // delete a user
    router.delete("/id", async (req, res) => {
        try {
            const userData = await User.destroy({
                where: {
                    id: req.params.id,
                }
            })
            if (!userData) {
                res.status(404).json({ message: "This user doesn't exist" });
            }
            res.status(200).json(userData);
        } catch (error) {
            res.status(400).json(error);
        }
    });

    
//     User.findAll({
//         // what to include
//         // include: [
//         //     { model: User, as: "user" }],
//         order: [
//             ["id", "ASC"]]
//     })
//     .then((userData) => {
//         res.status(200).json(userData);
//     })
//     .catch((error) => {
//         console.error(error);
//     }); 
// });

// create a user

// router.post("/", (req, res) => {
//     User.create({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         username: req.body.username,
//         password: req.body.password
//     })
//     .then((newUser) => {
//         res.status(200).json(newUser);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// });



module.exports = router;