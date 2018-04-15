export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    phoneId: DataTypes.STRING,
  });

  User.associate = (models) => {
    models.User.hasMany(models.Place);
  };

  return User;
};
