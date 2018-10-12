module.exports = function(sequelize, DataTypes) {
    var Userfavorite = sequelize.define("Userfavorite", {
      businessID: DataTypes.TEXT,
      name: DataTypes.TEXT,
      phone: DataTypes.TEXT,
      price: DataTypes.TEXT,
      rating: DataTypes.TEXT,
      image: DataTypes.TEXT
    });
   

  Userfavorite.associate = function(models) {

      // this allows table userfavorite to join with table userinfo in SQL
      //keep in mind this is also called in the other models table
      Userfavorite.belongsTo(models.Userinfo, {
        foreignKey: {
            allowNull: false
        }
      });
  };
  return Userfavorite;
};