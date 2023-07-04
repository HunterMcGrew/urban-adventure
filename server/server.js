// server.js

// required
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const routes = require("./routes");
const mongoose = require("mongoose");
const db = require("./config/connection");

// port info & other variables
const PORT = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;

// app use express
const app = express();

// session
const store = MongoDBStore({
	uri: mongoURI,
	collection: "sessions",
	connectionOptions: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
});

// error logging for session store
store.on("error", function (error) {
	console.error(error);
});

const sess = {
	secret: SECRET,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 14,
		sameSite: "strict",
		
	},
	store: store,
	resave: true,
	saveUninitialized: true,
};

// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

// turn on routes
app.use(routes);

// is the server running?
db.once("open", () => {
	app.listen(PORT, () => console.log(`Connected to database on port${PORT}`));
});
