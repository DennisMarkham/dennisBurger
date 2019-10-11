// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.get("/", function(req, res) {
  res.render("mainFood");
});

app.get("/desserts", function(req, res){
	res.render("desserts");
});

app.listen(port);