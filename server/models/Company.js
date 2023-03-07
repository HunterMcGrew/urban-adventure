// User model for sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// initialize User model (table) by extendding off Sequilize's model class
class Company extends Model {}

Company.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
    },
    company_name: {
            type: DataTypes.STRING,
            allowNull: false,

    },
    description: {
        type: DataTypes.STRING,
    },
    // need to have a reference to positions here???
    // it will list all the companies open positions
    users: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
    positions: {
        type: DataTypes.INTEGER,
        references: {
            model: "position",
            key: "id",
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "company",
}
);

module.exports = Company;