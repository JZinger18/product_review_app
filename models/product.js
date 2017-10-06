module.exports = function(sequelize, DataTypes) 
{

  var Product = sequelize.define("Product", 
  {

    product_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len:[1,100]
      }
    },
      name: {
      type: DataTypes.STRING,
      allowNull: false
    },
      manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Product.associate = function(models) {

    Product.hasMany(models.Review, {
      as:"ReviewProductId",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Product;

};
