const { computer, user } = require("../models");

const fs = require("fs")
const path = require("path")

exports.getComputer = async(req, res)=> {
    try {
        const response = await computer.findAll({
            include: {
                model: user,
                attributes: ['name']
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

exports.getComputerById = async(req, res)=> {
    try {
        const response = await computer.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

exports.createComputer = async(req, res)=> {
    if(req.body === null) return res.status(400).json({msg:"Computer Not Created"});
    const nama = req.body.nama;

    try {
        await computer.create({nama_computer: nama});
        res.status(201).json({msg: "Computer Has Been Created"})
    } catch (error) {
        console.log(error);
    }
}

exports.updateComputer = async(req, res)=> {
    const computer = await computer.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!computer) return res.status(404).json({msg: "Data Not Found"});
    const nama = req.body.nama;
    const user_id = req.body.user_id;
    try {
        await computer.update({nama_computer: nama, user_id: user_id},{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Computer Has Been Updated"})
    } catch (error) {
        console.log(error)
    }
}

exports.deleteComputer = async(req, res)=> {
    const computerfind = await computer.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!computerfind) return res.status(404).json({msg: "Data Not Found"});
    try {
        await computerfind.destroy();
        res.status(200).json({msg: "Computer Has Been Deleted"})
    } catch (error) {
        console.log(error)
    }
}