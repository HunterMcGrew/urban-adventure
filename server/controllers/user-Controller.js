// functions for user api calls

const User = require("../models/User");
const Company = require("../models/Company");
const bcrypt = require("bcrypt");
// const { v4: uuidv4 } = require("uuid");

// const generateSessionToken = () => {
// 	return uuidv4();
// };

// get all users
const getUsers = async (req, res) => {
	try {
		const userData = await User.find();
		res.json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

// get a single user
const singleUser = async (req, res) => {
	try {
		const userData = await User.findOne({ _id: req.params.id });
		!userData
			? res.status(404).json({ message: "That user doesn't exist..." })
			: res.status(200).json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

// create a new user
const createUser = async (req, res) => {
	try {
		const userData = await User.create(req.body);
		res.status(200).json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

// update user
const updateUser = async (req, res) => {
	try {
		const userData = await User.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true, runValidators: true }
		);
		!userData
			? res.status(404).json({ message: "That user doesn't exist..." })
			: res.status(200).json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

const deleteUser = async (req, res) => {
	try {
		const userData = await User.findOneAndDelete({ _id: req.params.id });
		!userData
			? res.status(404).json({ message: "That user doesn't exist..." })
			: res.status(200).json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

const signup = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(409).json({ message: "Username already exists" });
		}

		console.log(password, "password");
		console.log(username, "username");
		console.log(email, "email");

		const hashPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			username,
			email,
			password: hashPassword,
		});

		await newUser.save();

		// const sessionToken = generateSessionToken();
		// req.session.token = sessionToken;
		// res.session.username = username;

		res.redirect("/");
	} catch (error) {
		console.error("Error during signup: ", error);
		res.status(500).json({ message: "Server error" });
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res
				.status(401)
				.json({ message: "Invalid username or password" });
		}

		const isValidPassword = await bcrypt.compare(password, user.password);
		if (!isValidPassword) {
			return res
				.status(401)
				.json({ message: "Invalid username or password" });
		}

		// const sessionToken = generateSessionToken();
		// req.session.token = sessionToken;
		// res.session.username = user.username;

		res.redirect("/");
	} catch (error) {
		console.error("Error during login: ", error);
		res.status(500).json({ message: "Server error" });
	}
};

module.exports = {
	getUsers,
	singleUser,
	createUser,
	updateUser,
	deleteUser,
	login,
	signup,
};
