// server.js

// required
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

// port info
const PORT = process.env.PORT || 3001;

// app use express
const app = express();

// testing api and react
// app.get("/test", (req, res) => {
//     res.json({ message: `Hello! The server is running on port ${PORT}`})
// });
// app.get("/jane", (req, res) => {
//     res.json({ message: `Jane is amazing`})
// });

// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// is the server running?
sequelize.sync().then(() => {
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
});

