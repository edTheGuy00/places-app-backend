export default (sequelize, DataTypes) => {
  const Place = sequelize.define('place', {
    placeId: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  Place.assiciate = (models) => {
    models.Place.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
  };

  return Place;
};
