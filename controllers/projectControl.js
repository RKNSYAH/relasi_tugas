const path = require("path");
const fs = require("fs");
const { departemen, project } = require("../models");

exports.getProject = async (req, res) => {
  try {
    const response = await project.findAll({
      include: [
        {
          model: departemen,
          attributes: ["departement_head"],
        },
      ],
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const response = await project.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: departemen,
          attributes: ["departement_head"],
        },
      ],
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.createProject = async (req, res) => {
  if (req.body === null)
    return res.status(400).json({ msg: "Project Not Created" });
  const projhead = req.body.project_name;
  const projdesc = req.body.project_description;
  const departmentId = req.body.department_id || 0;
  const departmentHead = req.body.department_head

  try {

    const department = await departemen.findOne({where: {id: departmentId}});

    if (!department) {
        await project.create(
            {
              project_name: projhead,
              project_description: projdesc,
              departements: [
                {
                  departement_head: departmentHead,
                },
              ],
            },
            {
              include: departemen,
            }
          );

         return res.status(201).json({ msg: "Departement Has Been Created" });
    }

    const newproject = await project.create(
        {
          project_name: projhead,
          project_description: projdesc,
        },
      );

    await newproject.addDepartements(department)

    res.status(201).json({ msg: "Departement Has Been Created" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProject = async (req, res) => {
  const projectFind = await project.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!projectFind) return res.status(404).json({ msg: "Data Not Found" });
  try {
    await projectFind.destroy();
    res.status(200).json({ msg: "Departemen Has Been Deleted" });
  } catch (error) {
    console.log(error);
  }
};
