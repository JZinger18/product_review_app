module.exports = function(sequelize, DataTypes) 
{

  var User = sequelize.define("User", 
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
      len:[1,50]
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        is: /^[^@]+@[^@]+.[^@]{3,6}$/i,
        len: [1,50]
      },
      defaultValue:null,
      unique:true
    },
      status: 
      {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
        },
      fbId : 
      {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        primaryKey: true
      }
  });

    User.associate = function(models) {

    User.hasMany(models.Review, {
      foreignKey: {
        allowNull: false
      }
    });

    User.hasMany(models.Channel, {
      foreignKey: {
        allowNull: false
      }
    });
    
  };

  return User;

};
