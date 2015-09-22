var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
	name: String
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;