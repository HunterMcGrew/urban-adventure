// // import models here 
// const sequelize = require("sequelize");
const User = require("./User");
const Company = require("./Company");

// // Associations

User.hasOne(Company, {
    foreignKey: "company_id",
    onDelete: "CASCADE"
});

Company.hasMany(User, {
    foreignKey: "user_id",
    // onDelete: "CASCADE"
});

// User.hasMany(User, {
//     foreignKey: User_id,
//     onDelete: "CASCADE"
// })

module.exports = {
    User,
    Company
};