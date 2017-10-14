// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require('../models');
var Op = require('sequelize').Op;
var YouTube = require('youtube-node');
var wholeObject;
var youTube = new YouTube();
youTube.setKey('AIzaSyAwef6wBJ9KUllwk0ab6ynzOKzrYutkaoM');




// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Reviews

  app.get("/api/getAllChannels", function(req, res) {

    console.log("below you will see the req.user object");
    console.log(req.user);

    db.Channel.findAndCountAll({
      limit: 12,//need to add the logic for this submission
      offset: 0,
      where:{name:{
        [Op.like]:"%"+req.query.searchValue+"%"
      }},
        attributes: {
         exclude: ['createdAt']  
       },
      include:[{model:db.User,attributes:{exclude: ['createdAt']}},{model:db.Review,attributes:{exclude: ['createdAt']}}]
  })
    .then(function(dbReview) {

       var channels = dbReview.rows.map(function(x){

        var ratingValue = x.Reviews.reduce(function(a,b){
            return a + b.rating
          },0)/x.Reviews.length;
                return{name:x.name,category:x.category,channelDescription:x.channelDescription,ratingValue:`<i class="fa fa-star"></i>`.repeat(Math.round(ratingValue)),thumbnail:x.thumbnail}
       });
//         res.render("dashboard",{channels,amountOfRows:dbReview.rows.length});
            res.json({dbReview,channels});
        });
  });

    app.get("/api/getOneChannel/:name", function(req, res) {
      db.Channel.findOne({
        where:{
      name:req.params.name
       },
       attributes:{
        exclude:['manufacturer','createdAt']
       }
     })
    .then(function(dbReview) {
      res.json(dbReview);
    })
  });

  app.get("/api/Reviews/category/:category", function(req, res) {
    db.Review.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });



  app.get("/api/channelsearch/:name?", function(req, res) {

    youTube.search(req.params.name, 10,{type:'channel'}, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(result);
    var response = result.items.map(

      function (channelresultsValues)
         {
          let id = channelresultsValues["id"]["channelId"];
          let title = channelresultsValues["snippet"]["title"];
          let description = channelresultsValues["snippet"]["description"];
          let url = channelresultsValues["snippet"]["thumbnails"]["default"]["url"];
          return {id,title,description,url};
         }

         );

      res.json({response,result});
  }

});


  });

/*  app.post("/api/Reviews", function(req, res) {
    console.log(req.body);
    db.Review.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });*/

    app.post("/api/userpost", function(req, res) {
    console.log(req.body);
    db.User.create({
      username:req.body.username,
      password:req.body.password,
      email:req.body.email
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });


app.post("/api/reviewpost", function(req, res) {
    console.log(req.body);
    db.Review.create(req.body)
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

app.post("/api/Channelpost", function(req, res) {

    db.Channel.create(req.body)
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });



  // DELETE route for deleting Reviews
  app.delete("/api/Reviews/:id", function(req, res) {

    db.Review.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(amountOfRowsAffected) {
      res.end(amountOfRowsAffected.toString());
    });
  });




  // PUT route for updating Reviews
  app.put("/api/Reviewupdate", function(req, res) {

    db.Review.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbReview) {

      res.json(dbReview);

    });
  });

};
