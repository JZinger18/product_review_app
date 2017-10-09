// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require('../models');
var Sequelize = require('sequelize');
var YouTube = require('youtube-node');
var wholeObject;
var youTube = new YouTube();
youTube.setKey('AIzaSyAwef6wBJ9KUllwk0ab6ynzOKzrYutkaoM');




// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Reviews
  app.get("/api/getAllProducts/:name", function(req, res) {
    db.Product.findAndCountAll({
      limit: req.query.limit,
      offset: 0,
      where:{name:req.params.name},
        attributes: {
         exclude: ['createdAt']  
       },
      include:[{model:db.User,attributes:{exclude: ['createdAt']}},{model:db.Review,attributes:{exclude: ['createdAt']}}]
  })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

    app.get("/api/getOneProduct/:name", function(req, res) {
      db.Product.findOne({
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

  // Get route for returning Reviews of a specific category
/*  app.get("/api/Reviews/category/:category", function(req, res) {
    db.Review.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });*/

  // Get rotue for retrieving a single Review










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

      res.json(response);
  }

});


  });

  // Review route for saving a new Review
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
    db.Review.create({
      messageBody:req.body.messageBody,
      UserId:req.body.UserId,
      ProductId : req.body.ProductId,
      id:1
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

app.post("/api/productpost", function(req, res) {

    db.Product.create({
      productDescription:req.body.productDescription,
      name:req.body.name,
      manufacturer:req.body.manufacturer,
      UserId:req.body.UserId,
      id: req.body.id
    })
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
