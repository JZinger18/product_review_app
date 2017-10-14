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

  app.get("/channelrenderingtest", function(req, res) {

    var offset = req.query.amount? "OFFSET "+((req.query.amount-1)*12): "";
    var position = 
    db.sequelize.query(`
      SELECT * FROM TestModels LIMIT 12 ${offset}`,{type:db.sequelize.QueryTypes.SELECT})
    .then(function(dbReview) {
     var channels = dbReview.map(function(x)
      {
        return{id:x.id,name:x.name,category:x.category,channelDescription:x.channelDescription,ratingValue:`<i class="fa fa-star"></i>`.repeat(Math.round(x.amountOfStars)),thumbnail:x.thumbnail}
      })

     db.TestModel.count("id").then(function(amountOfRows){
  //    console.log(channels);
    res.render("dashboardtest",{channels,amountOfRows,position:req.query.amount});
     })
    });
  });

};
