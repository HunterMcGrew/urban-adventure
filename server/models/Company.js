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
    
}
)