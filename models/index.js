'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var config    = require(__dirname + '/../config/config.json');
var env       = process.env[config.use_env_variable] || 'production';

var db        = {};

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize('mysql://qfcbpj3an76mt1rc:ph8m2kt4cqzeslg1@uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vi9nzb0uugyggoyk')


}
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
