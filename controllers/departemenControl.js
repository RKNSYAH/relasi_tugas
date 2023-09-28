const path = require("path")
const fs = require("fs")
const { departemen, project } = require("../models")

exports.getDepartement = async(req, res)=> {
    try {
        const response = await departemen.findAll({
            include: [{
                model: project,
                attributes: ["project_name"],
            }]
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

exports.getDepartementById = async(req, res)=> {
    try {
        const response = await departemen.findOne({
            where:{
                id: req.params.id
            },
            include: [{
                model: project,
                through: {
                    attributes: ["*"],
                }
            }]
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

exports.createDepartement = async(req, res)=> {
    if(req.body === null) return res.status(400).json({msg: "Departement Not Created"});
    const depthead = req.body.depthead;
    const deptdesc = req.body.deptdesc;

    const findDept = await departemen.findOne({where: {departement_head: depthead}})
    if(findDept) return res.status(406).json({msg: "Departement exists"})

    try {
        await departemen.create({departement_head: depthead, departement_description: deptdesc});
        res.status(201).json({msg: "Departement Has Been Created"});
    } catch (error) {
        console.log(error);
    }
}

exports.deleteDepartemen = async(req, res)=> {
    const departemenfind = await departemen.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!departemenfind) return res.status(404).json({msg: "Data Not Found"});
    try {
        await departemenfind.destroy();
        res.status(200).json({msg: "Departemen Has Been Deleted"})
    } catch (error) {
        console.log(error)
    }
}