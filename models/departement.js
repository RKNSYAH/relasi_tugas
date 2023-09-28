const { DataTypes } = require( "sequelize");
const db = require( "../database/database.js");
const user = require( "./user.js");

const departemen =db.define('departement',{
    departement_head: DataTypes.STRING,
    departement_description: DataTypes.STRING
},{
    freezeTableName:true
});


module.exports = departemen;