module.exports = function(sequelize, DataTypes) 
{

  var Review = sequelize.define("Review", 
  {

    title:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:
      {
        len:[5,20]
      }

    },
    messageBody: 
      {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: 
        {
        len:[20,1000]
        } 
      },
    rating:
        {
      type: DataTypes.INTEGER,
      allowNull: false
        }

  });


  return Review;

};
