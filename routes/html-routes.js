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

  // Each of the below routes just handles the HTML page that the user gets sent to

  app.get("/channelrendering", function(req, res) {
    db.sequelize.query(`SELECT Channels.id as id,Channels.name as name ,count(Reviews.id) as amountOfReviews,avg(Reviews.rating)as amountOfStars, Channels.category as category,Channels.thumbnail as thumbnail,Channels.channelDescription as channelDescription
FROM Channels INNER JOIN Reviews ON Reviews.Channelid = Channels.id
GROUP BY Channels.id ORDER BY count(Reviews.id) DESC LIMIT 12`,{type:db.sequelize.QueryTypes.SELECT})
    .then(function(dbReview) {
     var channels = dbReview.map(function(x)
      {
        return{name:x.name,category:x.category,channelDescription:x.channelDescription,ratingValue:`<i class="fa fa-star"></i>`.repeat(Math.round(x.amountOfStars)),thumbnail:x.thumbnail}
      })

     db.Channel.count("id").then(function(amountOfRows){
      res.render("dashboard",{channels,amountOfRows});
     })
    });
  });

  app.get("/", function(req, res) {
    db.Channel.findAndCountAll({
      limit: 12,
      offset: 0,
      include:[{model:db.User,attributes:{exclude: ['createdAt']}},{model:db.Review,attributes:{exclude: ['createdAt']}}],
      order: [ [ { model: db.Review, as: 'amountOfReviews' }, 'name', 'DESC' ] ]
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

};
