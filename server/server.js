// server.js

// required
const express = require("express");

// port info
const PORT = process.env.PORT || 3001;

// app use express
const app = express();

// testing api and react
app.get("/api", (req, res) => {
    res.json({ message: `Hello! The server is running on port ${PORT}`})
});

app.get("/jane", (req, res) => {
    res.json({ message: `Jane is amazing`})
});

// is the server running?
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

