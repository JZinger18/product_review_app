module.exports = function(sequelize, DataTypes) 
{

  var Review = sequelize.define("Review", 
  {

    messageBody: 
      {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: 
        {
        len:[250,1000]
        } 
      },
    rating: 
        {
      type: DataTypes.INTEGER,
      allowNull: false
        }


  });

  Review.associate = function(models){

  Review.belongsTo(models.Channel, 
  {
    foreignKey: 
      {
        allowNull: false
      }
  });

  Review.belongsTo(models.User, 
  {
    foreignKey: 
      {
        allowNull: false
      }
  });
};

  return Review;

};
