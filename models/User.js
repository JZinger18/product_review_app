module.exports = function(sequelize, DataTypes) 
{

  var User = sequelize.define("User", 
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
      len:[1,30]
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len:[1,20]
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: /^[^@]+@[^@]+.[^@]{3,6}$/i,
        len: [1,50]
      },
      unique:true
    }
  });

    User.associate = function(models) {

    User.hasMany(models.Review, {
      foreignKey: {
        allowNull: false
      }
    });

    User.hasMany(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
    
  };

  return User;

};
