const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Projects = require('../models/project-model.js');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

projects = [{
  name: "Project1",
  mediaType: "logo",
  fileType: 'jpg',
  desc: "Description1",
  images: 'https://media.giphy.com/media/3o6ZsVdmA8umtiRpdu/giphy.gif',
  colorOne: '#ff0000',
  colorTwo: '#00ff00',
  colorThree: '#0033cc',
  dueDate: '4/18/1980'
},{
  name: "Project2",
  mediaType: "banner",
  fileType: 'png',
  desc: "Description2",
  images: 'https://media.giphy.com/media/l0ErElRvtuKrCoM6c/giphy.gif',
  colorOne: '#00ffff',
  colorTwo: '#ff33cc',
  colorThree: '#cccc00',
  dueDate: '2/08/1985'
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
