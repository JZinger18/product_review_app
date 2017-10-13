module.exports = function(sequelize, DataTypes) 
{

  var OnlineUser = sequelize.define("OnlineUser", 
  {

  });

  OnlineUser.associate = function(models){

  OnlineUser.belongsTo(models.Channel, 
  {
    foreignKey: 
      {
        allowNull: false,
        unique: true
      }
  });

  OnlineUser.belongsTo(models.User, 
  {
    foreignKey:{
        allowNull: false,
        primaryKey:true
      }

  });

 

};

 return OnlineUser;

}