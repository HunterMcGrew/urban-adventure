// User model for sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// initialize User model (table) by extendding off Sequilize's model class
class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                // need a regex for emaiL?
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            // will do the encryption at some point
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // need a regex for email?
                len: [8, 25]
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
);

module.exports = User;