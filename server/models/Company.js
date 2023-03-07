// required
const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const formatDate = require("../utils/helpers");


const companySchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: false,
            trim: true,
            validate: [ isEmail, "Invalid Email" ],
            default: null,
        },
        description: {
            type: String,
            unique: false,
            required: true,
        },
        recruiters: [{
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null
        }],
        job_openings: [{
            type: Schema.Types.ObjectId,
            ref: "position",
            default: null,
        }],
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

const Company = model("company", companySchema);

module.exports = Company;