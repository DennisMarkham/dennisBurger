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

//SQL STUFF
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dennis_burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
 //
 //this is doing to be a doozy to work through.  I have to figure out how to render both the
 //appropriate handle bars and the data...outside those handle bars.  In "main" in other 
 //words.  Is that even possible?
 //anyhow, the database has been perfected, I'm off for now.



app.get("/", function(req, res) {
  res.render("mainFood");
});

app.get("/desserts", function(req, res){
	res.render("desserts");
});

app.listen(port);