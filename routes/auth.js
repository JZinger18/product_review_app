// Dependencies
// =============================================================
var path = require("path");
var db = require('../models');
var Op = require('sequelize').Op;


// Routes
// =============================================================
module.exports = function(app) {
app.get("/status",function(req,res){

    if(req.user){
      res.send({status:true})
    }else{
      res.send({status:false})
    }
	
  });

};