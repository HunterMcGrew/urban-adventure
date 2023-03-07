// User model for sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// initialize User model (table) by extendding off Sequilize's model class
class Position extends Model {}

Position.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // company_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "company",
        //         key: "id",
        //     },
        // }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "position",
    }
);

module.exports = Position;