var db = require(__dirname +"/models");
var express = require("express");
var app = express();
var session = require("express-session");
var passport   = require('passport');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var server = require("http").Server(app);
var io = require("socket.io")(server);
var cookieParser = require("cookie-parser");
var path = require("path");
var FacebookStrategy = require('passport-facebook').Strategy;


var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// Sets up the Express app to handle data parsing

passport.use(new FacebookStrategy({
    clientID: "1662728243761233",
    clientSecret: "71d64445ec57767bb1ec1848f9c2c0a8",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {

  db.User.findOrCreate({where: {fbId: profile.id}, defaults: {username: profile.displayName}})
  .spread((user, created) => {
  /*  console.log("created is below");
    console.log(created);
    console.log("plain user below");*/
    user = user.get({plain:true});
/*    console.log(user);
*/    return done(null,user);
  })
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.fbId);
});



passport.deserializeUser(function(id, done) {
db.User.findOne({where:{fbId:id}}).then(function(user){
done(null,user);
});

});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());
app.use(session({
  secret: 'awill',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Static directory
var users = [];

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
require("./routes/dummycases")(app);
require("./routes/channel-routes")(app);
require("./routes/testroute")(app);
require("./routes/testcases")(app);
require("./routes/auth")(app);
require("./routes/socket-route")(app,io);


/*require("./socketCalls.js")(io);
*/

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/channelRendering' }),
  function(req, res) {
    console.log("in callback to authentication route below CONFIRM");
    console.log(req.user);
/*    db.OnlineUser.findOne({where:{UserfbId : req.user.fbId}})
*/     res.redirect("/reroute.html")
  });


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function() {
  server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
