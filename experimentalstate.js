
var passport   = require('passport');
var session    = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;
var exphbs = require('express-handlebars');
var LocalStrategy = require('passport-local').Strategy;







// =============================================================

// Requiring our models for syncing
// Sets up the Express app to handle data parsing

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

passport.use(new LocalStrategy(
  function(testuser, password, done) {
    db.User.findOne({where:{ username: testuser},attributes:{include:["username","password"]}}).then(function(user){
    	console.log(testuser);
    	console.log(password);
    	console.log(user.dataValues);
      if (!user.dataValues.username) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      if (user.dataValues.password != password) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user.dataValues);
    });
  }
));

app.post('/login',
  passport.authenticate('local', {
  successRedirect: '/stephanfile',
  failureRedirect: '/',
  failureFlash: true }),function(user){
  	console.log(user);
  }
);




