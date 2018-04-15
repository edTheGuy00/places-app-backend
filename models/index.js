import Sequelize from 'sequelize';

const sequelize = new Sequelize('placesapp', 'postgres', 'postgres', {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  define: {
    underscored: true,
  },
});
