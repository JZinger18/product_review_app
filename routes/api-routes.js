// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

/*  // GET route for getting all of the Reviews
  app.get("/api/Reviews/", function(req, res) {
    db.Review.findAll({})
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // Get route for returning Reviews of a specific category
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

  // Get rotue for retrieving a single Review
  app.get("/api/Reviews/:id", function(req, res) {
    db.Review.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // Review route for saving a new Review
  app.post("/api/Reviews", function(req, res) {
    console.log(req.body);
    db.Review.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });
*/
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
      ProductId : req.body.ProductId
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

app.post("/api/productpost", function(req, res) {
    console.log(req.body);
    db.Product.create({
      productDescription:req.body.productDescription,
      name:req.body.name,
      manufacturer:req.body.manufacturer,
      UserId:req.body.Userid
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

  };

/*  // DELETE route for deleting Reviews
  app.delete("/api/Reviews/:id", function(req, res) {
    db.Review.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // PUT route for updating Reviews
  app.put("/api/Reviews", function(req, res) {
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
};*/
