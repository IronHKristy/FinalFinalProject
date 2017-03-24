const express = require('express');
const mongoose = require('mongoose');
const Project = require('../models/project-model');
const router = express.Router();

router.get('/projects', (req, res, next) => {
  Project.find((err, projectsList) => {
    if(err) {
      res.json(err);
      return;
    }

    res.json(projectsList);
  });
});

router.post('/projects', (req, res, next) => {
  const theProject = new Project({
    name: req.body.name,
    mediaType: req.body.mediaType,
    fileType: req.body.fileType,
    desc: req.body.desc,
    images: req.body.images
  });

  theProject.save((err) => {
    if(err) {
      req.json(err);
      return;
    }

    res.json({
      message: 'new project created',
      id: theProject._id
    });
  });
});

router.get('/projects/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400)
      .json({ message: "Specified id is not valid "});
      return;
  }
  Project.findById(req.params.id, (err, theProject) => {
    if(err) {
      res.json(err);
      return;
    }
    res.json(theProject);
  });
});

module.exports = router;
