import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'dens2n6hcm9akh',
  'rfulnxttizuctl',
  'd32f1bcfc87d506a6b928621e31286953815f0897f8f6b990409128acda90069', {
    host: 'ec2-54-225-96-191.compute-1.amazonaws.com',
    port: 5432,
    native: true,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op,
    define: {
      underscored: true,
    },
  },
);

const models = {
  User: sequelize.import('./user'),
  Place: sequelize.import('./place'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
