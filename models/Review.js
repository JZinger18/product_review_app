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

  Review.associate = function(models){

  Review.belongsTo(models.Channel, 
  {
    foreignKey: 
      {
        allowNull: false,
        unique: 'compositeIndex'
      }
  });

  Review.belongsTo(models.User, 
  {
    foreignKey: 
      {
        allowNull: false,
        unique: 'compositeIndex'
      }
  });
};

  return Review;

};
