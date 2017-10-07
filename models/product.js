module.exports = function(sequelize, DataTypes) 
{

  var Product = sequelize.define("Product", 
  {

    productDescription: {
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
      manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Product.associate = function(models) {

    Product.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Product.hasMany(models.Review, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Product;

};
