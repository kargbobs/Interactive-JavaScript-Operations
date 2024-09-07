const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
