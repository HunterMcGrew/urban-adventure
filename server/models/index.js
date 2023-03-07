// // import models here 
// const sequelize = require("sequelize");
const User = require("./User");
const Company = require("./Company");
const Position = require("./Position");

// // Associations

User.hasOne(Company, {
    foreignKey: "companyId",
    // onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

User.hasOne(Position, {
    foreignKey: "positionId",
    onUpdate: "CASCADE",
})

Company.hasMany(User, {
    foreignKey: "userId",
    // onDelete: "CASCADE"
    onUpdate: "CASCADE",
});


Company.hasMany(Position, {
    foreignKey: "positionId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

// Position.belongsTo(Company, {
//     foreignKey: "companyId",
//     // onDelete: "CASCADE"
//     onUpdate: "CASCADE",
// })

module.exports = {
    User,
    Company,
    Position
};