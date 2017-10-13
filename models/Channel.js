module.exports = function(sequelize, DataTypes) 
{

  var Channel = sequelize.define("Channel", 
  {

    channelDescription: 
      {
      type: DataTypes.STRING,
      allowNull: false
      },
    name: 
      {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
      },

    thumbnail:
      {
      type: DataTypes.STRING,
      allowNull:false
      },
    category:
      {
      type: DataTypes.STRING,
      allowNull:false
      }

  });
  Channel.associate = function(models){

    Channel.hasMany(models.Review, {
      foreignKey: {
        allowNull: false
      }
    });

    Channel.belongsTo(models.User, 
    {
      foreignKey: 
        {
          allowNull: false
        }
    });

 } 

  return Channel;

};
