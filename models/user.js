const { DataTypes } = require( "sequelize");
const db = require( "../database/database.js");
const computer = require( "./computer.js");

const user=db.define('user',{
    name: DataTypes.STRING,
    nik: DataTypes.STRING
},{
    freezeTableName:true
});


module.exports = user