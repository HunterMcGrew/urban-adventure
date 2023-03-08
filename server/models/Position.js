// required
const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

// getters
const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toUTCString();
};

const positionSchema = new Schema(
    {
        title: {
            type: String,
            unique: false,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        isHybrid: {
            type: Boolean,
            required: true,
        },
        isRemote: {
            type: Boolean,
            required: true,
        },
        isOffice: {
            type: Boolean,
            required: true,
        },
        company: [{
            type: Schema.Types.ObjectId,
            ref: "company",
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

const Position = model("position", positionSchema);

module.exports = Position;