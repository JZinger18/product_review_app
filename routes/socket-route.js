// Dependencies
// =============================================================
var path = require("path");
var db = require('../models');
var ioCallBack = require('../socketCalls.js');
var Op = require('sequelize').Op;


// Routes
// =============================================================
module.exports = function(app,io) {
app.get("/connectToSocket/:channelId",function(req,res){
  let user = req.user;
  user.channelId = req.params.channelId;
  if(req.user)
  {
    io.on("connect",function(socket){
      iscallBack(socket,user)
    });

    res.json({status:true});

  }
  else
  {
    res.json({status:false});
  }

  });

};