module.exports = function(sequelize, DataTypes) 
{

  var Review = sequelize.define("Review", 
  {

    messageBody: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len:[250,1000]
      } 
    },
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      set(val){
        return this.setDataValue("id",Number(String(this.getDataValue("ProductId"))+this.getDataValue("UserId")))
      },
      primaryKey:true
    }

    /*,
    ProductId:{
      primaryKey:true


    },
    UserId:{
      primaryKey:true

    }*/

  });

  Review.associate = function(models){

  Review.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });

  Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
      });
};

  return Review;

};
