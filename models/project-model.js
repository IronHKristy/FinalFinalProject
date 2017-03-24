const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  mediaType: [],
  fileType: [],
  desc: String,
  images: String,
  colorOne: String,
  colorTwo: String,
  colorThree: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
