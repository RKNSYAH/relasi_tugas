const router = require("express").Router();
const {
  deleteComputer,
  getComputer,
  getComputerById,
  createComputer,
  updateComputer,
} = require("../controllers/computerControl.js");
const {
  getDepartement,
  getDepartementById,
  createDepartement,
  deleteDepartemen,
} = require("../controllers/departemenControl.js");
const {
  getProject,
  getProjectById,
  createProject,
  deleteProject,
} = require("../controllers/projectControl.js");

const {
  deleteUser,
  getUser,
  getUserById,
  createUser,
} = require("../controllers/userControl.js");

router.get("/computer", getComputer);
router.get("/computer/:id", getComputerById);
router.post("/computer", createComputer);
router.patch("/computer/:id", updateComputer);
router.delete("/computer/:id", deleteComputer);

router.get("/user", getUser);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);

router.get("/departement", getDepartement);
router.get("/departement/:id", getDepartementById);
router.post("/departement", createDepartement);
router.delete("/departement/:id", deleteDepartemen);

router.get("/project", getProject);
router.get("/project/:id", getProjectById);
router.post("/project", createProject);
router.delete("/project/:id", deleteProject);

module.exports = router;
