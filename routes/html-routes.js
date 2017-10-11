// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require('../models');
var Op = require('sequelize').Op;

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.Channel.findAndCountAll({
      limit: 12,
      offset: 0,
      include:[{model:db.User,attributes:{exclude: ['createdAt']}},{model:db.Review,attributes:{exclude: ['createdAt']}}]
  })
    .then(function(dbReview) {
      var channels = dbReview.rows.map(function(x)
      {
        var amountOfStars = Math.round(x.Reviews.reduce(function(a,b){return a+Number(b.rating)},0)/x.Reviews.length);
        return{name:x.name,category:x.category,channelDescription:x.channelDescription,ratingValue:`<i class="fa fa-star"></i>`.repeat(amountOfStars),thumbnail:x.thumbnail}
      })
      res.render("dashboard",{channels:channels});
    });
  });
  app.get("/testing", function(req, res) {
    res.render("testing");
  });

/*
  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });*/

};
