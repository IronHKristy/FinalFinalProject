const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({

  id: String,
  user: String,
  name: String,
  mediaType: [],
  fileType: [],
  desc: String,
  images: String,
  colorOne: String,
  colorTwo: String,
  colorThree: String,
  dueDate: Date,
  requester: String,
  designer: String
}, {
  timestamps: {
    createdAt:          "created_at",
    updatedAt:          "updated_at"
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
