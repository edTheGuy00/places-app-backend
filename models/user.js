export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    phoneid: DataTypes.STRING,
  });

  return User;
};
