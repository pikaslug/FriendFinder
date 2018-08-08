// Dependencies
var express = require("express");
// var exphbs = require("express-handlebars");
// var prompt = require("prompt");
// var inquirer = require("inquirer");
var bodyParser = require("body-parser");
var path = require("path");

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// ================================================================================

// Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var newFriends = [
//     { name: "Kristen", hobby: "musician", interestedIn: "Sky diving" },
// ];

// Routes
// app.get("/icecreams/:name", function(req, res) {
//     res.render("/views/layouts/index.handlebars", icecreams[0]);
// });

// app.get("/weekend", function(req, res) {
//     res.render("index", lunches[1]);
// });

// app.get("/icecreams/:name", function(req, res) {
//     res.render("all-icecreams", {
//         Icecream_List: icecreams,
//     });
// });

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
