
var db = require("./models");
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



// =============================================================
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// Sets up the Express app to handle data parsing

passport.use(new FacebookStrategy({
    clientID: "1662728243761233",
    clientSecret: "71d64445ec57767bb1ec1848f9c2c0a8",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
  	console.log(profile);
  	var user = {profile};
 	cb(null,user);
  }
));
passport.serializeUser(function(user, done) {
  done(null, {id:user.id,name:"andrew"});
});
passport.deserializeUser(function(id, done) {
    done(null, {id:id,name:"andrew"});
});

app.use(session({ secret: "amAwesome" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static(path.join(__dirname,"public")));
var users = [];


io.on('connection',function(socket){
	console.log('new connection has been made');

	socket.emit('message-from-server',{greeting:'Hello from server',users:users});

	socket.on("message-from-client",function(message){
		console.log(message);
	});
	socket.on("message-from-client-chat",function(message){
		console.log(message);
		if (!users.includes(message.user)){
		users.push(message.user);
		console.log("users is"+users);
	}	
		socket.emit("updateChat",{users});
		socket.broadcast.emit("updateChat",{message,users:users});
	});
	
})


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/dummycases.js")(app);

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/testing' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/testing');
  });


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
 	server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
