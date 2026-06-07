const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  branch: String,
  year: Number
});

module.exports = mongoose.model("Student", studentSchema);