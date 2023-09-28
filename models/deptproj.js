const { DataTypes } = require( "sequelize");
const db = require( "../database/database.js");
const departement = require( "./departement.js");
const project = require( "./project.js");


const depProj = db.define('deptproj',{
},{
    freezeTableName:true
},{
    timestamps:false
});

module.exports = depProj;