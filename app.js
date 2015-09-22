var express = require("express"),
	mongoose = require("mongoose"),
	db = require("./models"),
	app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

app.get("/", function(req,res){
	res.render("index", {val: "Stay tuned"});
});

app.get("/users", function(req, res){
	db.User.find({}, function(err, user){
		if(err) {
			throw err;
		} else {
			res.render("users/index", {user: user});
		}
	});
});

app.get("/projects", function(req, res){
	db.Projects.find({}, function(err, project){
		if(err) {
			throw err;
		} else {
			res.render("projects/index", {project: project});
		}
	});
});

app.get("*", function(req,res){
	res.render("404");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
