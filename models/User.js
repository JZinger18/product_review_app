module.exports = function(sequelize, DataTypes) 
{

  var User = sequelize.define("User", 
  {
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len:[1,30]
      }
    },
    password:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len:[1,20]
      }
    },
    email:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        is: /^[^@]+@[^@]+.[^@]{3,6}$/i,
        len: [1,50]
      }
    }
  });

    User.associate = function(models) {

    User.hasMany(models.Review, {
      as: "ReviewUserId",
      foreignKey: {
        allowNull: false
      }
    });

    User.hasMany(models.Product, {
      as: "ProductUserId",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;

};
