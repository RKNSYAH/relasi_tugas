const { computer, user } = require("../models")
const path = require("path")
const fs = require("fs")

exports.getUser = async(req, res)=> {
    try {
        const response = await user.findAll({
            include: {
                model: computer,
                attributes: ['nama_computer']
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

exports.getUserById = async(req, res)=> {
    try {
        const response = await user.findOne({
            where:{
                id: req.params.id
            },
            include: {
                model: computer,
                attributes: ['nama_computer']
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

exports.createUser = async(req, res)=> {
    if(req.body === null) return res.status(400).json({msg: "User Not Created"});
    const name = req.body.name;
    const nik = req.body.nik;
     try {
        await user.create({name: name, nik: nik});
        res.status(201).json({msg: "User Has Been Created"});
     } catch (error) {
        console.log(error);
     }
}

exports.deleteUser = async(req, res)=> {
    const userfind = await user.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!userfind) return res.status(404).json({msg: "Data Not Found"});
    try {
        await userfind.destroy();
        res.status(200).json({msg: "Data Has Been Deleted"})
    } catch (error) {
        console.log(error);
    }
}