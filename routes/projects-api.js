const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Project = require('../models/project-model');
const upload = require('../config/multer');

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
    colorOne: req.body.colorOne,
    colorTwo: req.body.colorTwo,
    colorThree: req.body.colorThree,
    images: req.body.images,
    user: req.body.user,
    requester: req.body.user,
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


router.get('/projects/user', (req, res, next) => {
  Project.find({ 'designer': '58d6c8a87858e4c722b71e0c' }, ((err, designerId) => {
      if (err) {
        res.json(err);
        return;
      }
      return res.json(designerId);
    })
  );
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

router.post('/projects/:id', upload.single('file'), (req, res, next) => {
  const projectComplete = new ProjectComplete({
    images: `/uploads/${req.file.filename}`
  });

  projectComplete.save((err) => {
    if (err) {
      return(err);
    }
  });
});

router.post('/projects/:item/:userid', (req, res, next) => {
  const searchItem = req.params.item;
  Project.findOne({ _id: searchItem }, (err, biggerTank) => {
    if(err) {
      res.json(err);
      return;
    }
    const item = req.params.user;
    biggerTank.designer = item;
    console.log(biggerTank.designer);
    biggerTank.save((err) => {
      if(err) {
        return err.json();
      }
      res.status(200).json({ message: 'Designer has accepted project'});
      return;
    });
  });
});

module.exports = router;
