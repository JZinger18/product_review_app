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
        unique: 'compositeIndex'
      }
  });

  OnlineUser.belongsTo(models.User, 
  {
    foreignKey: 
      {
        allowNull: false,
        unique: 'compositeIndex'
      }
  });
};

  return OnlineUser;

};
