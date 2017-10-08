
var db = require("./models");
var express = require("express");
var app = express();
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');
var FacebookStrategy = require('passport-facebook').Strategy;
var bodyParser = require("body-parser");
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var bCrypt = require('bcrypt-nodejs');






// =============================================================
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// Sets up the Express app to handle data parsing


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
