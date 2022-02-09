const router = require("express").Router();
const Project = require("../db/models/project");

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.status(200).send(projects);
  } catch (error) {
    throw ("ERROR IN PROJECTS GET ROUTE:", error);
  }
});

router.get("/project/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id, { include: { all: true } });
    res.send(project);
  } catch (error) {
    throw ("ERROR IN PROJECT GET ROUTE:", error);
  }
});

//Router Error
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
