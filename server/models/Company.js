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
    // recruiters: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         // reference the user ID's that are recruiters for this company
    //         model: "user",
    //         key: "id",
    //     },
    // },
    description: {
        type: DataTypes.STRING,
    },
    // need to have a reference to positions here 
    // it will list all the companies open positions
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