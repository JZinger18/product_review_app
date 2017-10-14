// Dependencies
// =============================================================
var path = require("path");
var db = require('../models');
var Op = require('sequelize').Op;


// Routes
// =============================================================
module.exports = function(app) {
app.get("/channels/:value",function(req,res){

	db.Channel.findOne({
      where:{id:req.params.value},
      include:[{model:db.Review,include:[db.User]}]
  })
    .then(function(dbReview) {
      console.log(dbReview);
    	var ratingValue = dbReview.Reviews.reduce(function(a,b){
            return a + b.rating
          },0)/dbReview.Reviews.length;
       var reviews = dbReview.Reviews.map(function(x){

   
                return{name:x.User.username,title:x.title,messageBody:x.messageBody,rating:`<i class="fa fa-star"></i>`.repeat(Math.round(x.rating))}
       });
      res.render("channel_page",{result:[{thumbnail:dbReview.thumbnail,reviews,rating:`<i class="fa fa-star"></i>`.repeat(Math.round(ratingValue)),name:dbReview.name,channelDescription:dbReview.channelDescription}]});
        });
  });

};