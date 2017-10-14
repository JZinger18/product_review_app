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

    var offset = req.query.amount? "OFFSET "+((req.query.amount-1)*12): "";
    db.sequelize.query(`
      SELECT Channels.id as id,Channels.name as name ,count(Reviews.id) as amountOfReviews,avg(Reviews.rating)as amountOfStars, Channels.category as category,Channels.thumbnail as thumbnail,Channels.channelDescription as channelDescription
FROM Channels INNER JOIN Reviews ON Reviews.Channelid = Channels.id
GROUP BY Channels.id ORDER BY count(Reviews.id) DESC LIMIT 12 ${offset}`,{type:db.sequelize.QueryTypes.SELECT})
    .then(function(dbReview) {
     var channels = dbReview.map(function(x)
      {
        return{id:x.id,name:x.name,category:x.category,channelDescription:x.channelDescription,ratingValue:`<i class="fa fa-star"></i>`.repeat(Math.round(x.amountOfStars)),thumbnail:x.thumbnail}
      })

     db.Channel.count("id").then(function(amountOfRows){
/*      console.log(channels);
*/      res.render("dashboard",{channels,amountOfRows,position:req.query.amount});
     })
    });
  });


/*
  app.get("/", function(req, res) {
    db.Channel.findAndCountAll({
      limit: req.query.limit,
      offset: 0,
      where:{name:{
        [Op.like]:"%"+req.params.name+"%"
      }},
        attributes: {
         exclude: ['createdAt']  
       },
      include:[{model:db.User,attributes:{exclude: ['createdAt']}},{model:db.Review,attributes:{exclude: ['createdAt']}}]
  })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });*/

  app.get("/testing", function(req, res) {
    console.log("req.user below");
    console.log(req.user);
    res.render("testing");
  });
    app.get("/chatting", function(req, res) {
    console.log("req.user below");
    console.log(req.user);
    res.render("chatting");
  });
    app.get("/channels", function(req, res) {
    res.render("channel_page");
  });

};
