module.exports = function(sequelize, DataTypes) 
{

  var Channel = sequelize.define("Channel", 
  {

    channelDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len:[1,100]
      }
    },
      name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
      rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });

  Channel.associate = function(models) {

    Channel.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Channel.hasMany(models.Review, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Channel;

};
