const router = require('express').Router();
const Project = require('../db/models/project');

router.get('/projects', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.status(200).send(projects);
  } catch (error) {
    console.log('ERROR IN PROJECTS GET ROUTE:', error);
  }
});

//Router Error
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
