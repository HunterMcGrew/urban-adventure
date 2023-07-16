// mongoose User Schema

const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

// getters
const formatDate = (date) => {
	const newDate = new Date(date);
	console.log("newDate", newDate);
	return newDate.toUTCString();
};

const userSchema = new Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			validate: [isEmail, "invalid email"],
		},
		name: {
			type: String,
			unique: false,
			required: false,
			trim: true,
		},
		password: {
			type: String,
			unique: false,
			required: true,
			minLength: 8
		},
		// needs to be an ARRAY with the OBJECT inside
		// will that work???
		experience: [
			{
				type: String,
				required: false,
			},
		],
		isRecruiter: {
			type: Boolean,
			default: false,
		},
		company: {
			type: Schema.Types.ObjectId,
			ref: "company",
			default: null,
		},
		position: {
			type: Schema.Types.ObjectId,
			ref: "position",
			default: null,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: formatDate,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

// virtuals
// userSchema.virtual("full_name").get(function () {
// 	return this.first_name + " " + this.last_name;
// });

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) {
			return next();
		}

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(this.password, saltRounds);

		this.password = hashedPassword;

		next();
	} catch (error) {
		next(error);
	}
});

// Compare passwords
userSchema.methods.comparePassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("user", userSchema);

module.exports = User;
