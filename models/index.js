const computer = require("./computer");
const departemen = require("./departement");
const depProj = require("./deptproj");
const project = require("./project");
const user = require("./user");

user.hasOne(computer,{
    foreignKey:'user_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});
departemen.hasMany(user,{foreignKey:'departement_id'});
user.belongsTo(departemen,{foreignKey:'departement_id'});
computer.belongsTo(user,{foreignKey:'user_id'});

departemen.belongsToMany(project,{through: depProj});
project.belongsToMany(departemen,{through: depProj});

module.exports = {computer, departemen, project, user, depProj}