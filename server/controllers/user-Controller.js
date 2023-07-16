// functions for user api calls

const User = require("../models/User");
const Company = require("../models/Company");
const bcrypt = require("bcrypt");

// get all users
getUsers = async (req, res) => {
	try {
		const userData = await User.find();
		res.json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

// get a single user
singleUser = async (req, res) => {
	try {
		const userData = await User.findOne({ username: req.session.user.username });
		!userData
			? res.status(404).json({ message: "That user doesn't exist..." })
			: res.status(200).json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

// create a new user ** for testing ** will delete later
createUser = async (req, res) => {
	try {
		const userData = await User.create(req.body);
		res.status(200).json(userData);
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

// update user
updateUser = async (req, res) => {
	try {
		const userData = await User.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true, runValidators: true }
		);
		const updatedUser = !userData
			? res.status(404).json({ message: "That user doesn't exist..." })
			: res.status(200).json(userData);
        // do i need to save()?

        if (updatedUser) {
			req.session.user = updatedUser;
			req.session.authorized = true;
		}
        
	} catch (error) {
		console.log("error", error);
		res.status(500).json(error);
	}
};

deleteUser = async (req, res) => {
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

signup = async (req, res) => {
	if (req.session.authorized) res.redirect({email: req.session.user.email}, "/")
	const { name, email, password, id } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(409).json({ message: "Username already exists" });
		}

		const hashPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			id: id,
			name,
			email,
			password: hashPassword,
		});

		await newUser.save();

		if (newUser) {
			req.session.user = newUser;
			req.session.authorized = true;
			req.session.user.id = id;
		}

		res.redirect("/");
		
	} catch (error) {
		console.error("Error during signup: ", error);
		res.status(500).json({ message: "Server error" });
	}
};

login = async (req, res) => {
	if (req.session.authorized) res.redirect("/", {username: req.session.user.username})
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

		if (isValidPassword) {
			req.session.user = newUser;
			req.session.authorized = true;
		}
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
