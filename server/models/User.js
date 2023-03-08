// mongoose User Schema

const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

// getters
const formatDate = (date) => {
    const newDate = new Date(date);
    console.log("newDate", newDate);
    return newDate.toUTCString();
};

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            validate: [ isEmail, "invalid email" ],
        },
        first_name: {
            type: String,
            unique: false,
            required: true,
            trim: true,
        },
        last_name: {
            type: String,
            unique: false,
            required: true,
            trim: true,
        },
        isRecruiter: {
            type: Boolean,
            default: false,
        },
        company: {
            type: Schema.Types.ObjectId,
            ref: "company",
            default: null
        },
        position: {
            type: Schema.Types.ObjectId,
            ref: "position",
            default: null,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtuals
userSchema.virtual("full_name").get( function () {
    return this.first_name + " " + this.last_name;
})

const User = model("user", userSchema);

module.exports = User;
