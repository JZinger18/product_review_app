
var db = require("./models");
var express = require("express");
var app = express();
var passport   = require('passport');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var server = require("http").Server(app);
var io = require("socket.io")(server);
var path = require("path");







// =============================================================
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// Sets up the Express app to handle data parsing


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



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
		socket.broadcast.emit("updateChat",{message,users:users});
	});
	
})


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
 	server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
