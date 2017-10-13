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
	/*  {
"dbReview": {
"id": 1,
"channelDescription": "We make comedy videos",
"name": "h3h3Productions",
"thumbnail": "https://yt3.ggpht.com/-QWMKBXNBE2E/AAAAAAAAAAI/AAAAAAAAAAA/rEARmBXfgHw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
"category": "comedy",
"updatedAt": "2017-10-13T19:39:21.000Z",
"UserFbId": "abc11abc23",
"Reviews": [
  {
  "id": 5,
  "title": "sample title",
  "messageBody": "Ethan Klein is certaily not underrated and I believe deserves alot more attention than he currently receives. However I really hope he goes back to regularly uploading so we can get some fresh hot memes",
  "rating": 4,
  "createdAt": "2017-10-12T02:45:17.000Z",
  "updatedAt": "2017-10-12T02:45:17.000Z",
  "ChannelId": 1,
  "UserFbId": "abc11abc29",
  "User": {
      "username": "testUser6",
      "email": "testuser6@gmail.com",
      "status": "active",
      "fbId": "abc11abc29",
      "createdAt": "2017-10-13T19:39:16.000Z",
      "updatedAt": "2017-10-13T19:39:16.000Z"
  }
  },
]
}
}*/
