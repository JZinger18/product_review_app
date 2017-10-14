// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

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

  socket.on("message-from-client-check-log-in-status",function(user){
    db.User.findOne({where:{
        fbId: user.id
    }}).then(function(x){
      console.log(x);
      //have to create socket subscriptions dynamically and disconnect them as soon as the socket disconnects
      
        if(x)
        {
          db.OnlineUser.create({
            UserFbid : user.id,
            ChannelId:user.ChannelId
          });

          socket.emit("message-from-server-in-response-to-connection",
                {
                  allowAccessToChat:true
                })
          socket.to("channel"+user.channelId).emit('updateChat', {
            message:x.username + "joined!",
            usertoAdd: x.username
          });
          socket.on('updateChat',function(update){
              socket.to("channel"+user.channelId).emit('updateChat', 
              {
              message:update.message
              });
          });

          socket.on('disconnect',function()
          {

            db.OnlineUser.destroy({where:
              {
            UserFbid : user.id
              }
            });

          })
        }
        else
        {
              //if this is what is emitted the chat box has to be locked out and the user shouldn't be able to contribute. the user will however still be able to see the messages coming into the chat.

          socket.emit("message-from-server-in-response-to-connection",
                {
                  allowAccessToChat:false
                })

        }
    })


  })

/*  Joining and leaving
You can call join to subscribe the socket to a given channel:

io.on('connection', function(socket){
  socket.join('some room');
});
And then simply use to or in (they are the same) when broadcasting or emitting:

io.to('some room').emit('some event');
To leave a channel you call leave in the same fashion as join.

##*/

 // socket.removeAllListeners("message-from-client-chat");
  
})


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/dummycases.js")(app);
require("./routes/channel-routes.js")(app);
require("./routes/testroute.js")(app);
require("./routes/testcases.js")(app);

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',

  passport.authenticate('facebook', { failureRedirect: '/channelrendering' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/reroute.html');

  passport.authenticate('facebook', { failureRedirect: '/channelRendering' }),
  function(req, res) {
    console.log("in callback to authentication route below");
    console.log(req.user);
/*    db.OnlineUser.findOne({where:{UserfbId : req.user.fbId}})
*/    res.redirect("/reroute.html")
   }

  });


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
