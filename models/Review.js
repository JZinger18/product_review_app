module.exports = function(sequelize, DataTypes) 
{

  var Review = sequelize.define("Review", 
  {

    messageBody: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len:[250,1000]
      }
    }

  });

  return Review;

};
