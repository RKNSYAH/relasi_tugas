const { DataTypes } = require( "sequelize");

const db = require( "../database/database.js");

const project = db.define('project',{
    project_name:DataTypes.STRING,
    project_description: DataTypes.STRING
},{
    freezeTableName:true
})

module.exports = project;