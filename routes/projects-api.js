const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Project = require('../models/project-model');

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
  const newProject = new Project({
    name: req.body.name,
    mediaType: req.body.mediaType,
    fileType: req.body.fileType,
    desc: req.body.desc,
    images: req.body.images,
    user: req.body.user,
    requester: req.body.user
  });

  newProject.save((err) => {
    if(err) {
      req.json(err);
      return;
    }

    res.json({
      message: 'new project created',
      id: newProject._id
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

router.delete('/projects/:id', (req, res, next) => {
  //Check to see if ID is a valid mongoose identified
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is NOT valid.' });
    return;
  }
  Project.remove({ _id: req.params.id}, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({ message: 'Project has been removed.' });
  });
});

router.post('/projects/:id', (req, res, next) => {
  //do things
  //fun things
});

module.exports = router;
