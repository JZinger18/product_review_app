// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
/*
var AmazonReviews = require("amazon-reviews");

AmazonReviews.getReviewIds(
	{
	  productId: 'B06XJGCJ2W'
	}, 
function(err, reviewIds) 
{
	console.log(err);
	console.log("review Id's below");
	console.log(JSON.stringify(reviewIds));
	reviewIds.forEach(function(reviewId){
		AmazonReviews.getReview(
			{
			  productId: 'B06XJGCJ2W',
			  reviewId: reviewId
			},
	function(err, review) 
		{
		 console.log(review);
		});
	}) ; 
});*/
var db = require("./models");
var express = require("express");
var app = express();
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

passport.use(new FacebookStrategy({
    clientID: 1662728243761233,
    clientSecret: '71d64445ec57767bb1ec1848f9c2c0a8',
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(accessToken, refreshToken, profile, done);
  }
));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
);


// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/' }));


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
