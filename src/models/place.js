export default (sequelize, DataTypes) => {
  const Place = sequelize.define('place', {
    place_id: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  Place.assiciate = (models) => {
    Place.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
  };

  return Place;
};
