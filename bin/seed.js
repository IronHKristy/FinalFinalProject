const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Projects = require('../models/project-model.js');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

projects = [{
  name: "Project1",
  mediaType: true,
  fileType: true,
  desc: "Description1",
  images: 'https://media.giphy.com/media/3o6ZsVdmA8umtiRpdu/giphy.gif'
},{
  name: "Project2",
  mediaType: true,
  fileType: true,
  desc: "Description2",
  images: 'https://media.giphy.com/media/l0ErElRvtuKrCoM6c/giphy.gif'
}];

// Trail.create(trails, (err,docs) => {
//   // if (err) {
//   //   throw err;
//   // }
//   docs.forEach((oneTrail) => {
//     console.log(`${oneTrail.trailName} ${oneTrail._id}`);
//   });
// });

Projects.create(projects, (err, newDocs) => {
  if (err) {
    throw err;
  }

  newDocs.forEach((doc) => {
    doc.save((err) => {
      if (err) {
        throw err;
      }
    });
  });
});



setTimeout(() => { mongoose.connection.close(); }, 2000);
