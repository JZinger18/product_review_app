module.exports = function(sequelize, DataTypes) 
{

  var TestModel = sequelize.define("TestModel", 
  {

    ChannelDescription: 
      {
      type: DataTypes.STRING,
      allowNull: true
      },
    name: 
      {
      type: DataTypes.STRING,
      allowNull: true
      },

    thumbnail:
      {
      type: DataTypes.STRING,
      allowNull:true
      },
    category:
      {
      type: DataTypes.STRING,
      allowNull:true
      },
    UserFbId:
      {
      type: DataTypes.STRING,
      allowNull: true
      },
      amountOfStars:
      {
      type: DataTypes.STRING,
      allowNull: true
      }
  });

  return TestModel;

};