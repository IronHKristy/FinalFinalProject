const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a project name"]
  },
  mediaType: {
    logo: Boolean,
    ad: Boolean,
    banner: Boolean
  },
  fileType: {
    jpg: Boolean,
    png: Boolean,
    vector: Boolean
  },
  desc: {
    type: String
  },
  images: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
