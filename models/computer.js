const { DataTypes } = require("sequelize");
const db = require( "../database/database.js");


const computer=db.define('computer',{
    nama_computer: DataTypes.STRING
},{
    freezeTableName:true
});

module.exports = computer;
