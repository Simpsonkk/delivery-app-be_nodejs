const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
  database: 'deaesvvjsiirst',
  username: 'ngyfpceacvxtyy',
  password: '24f4d849eda5d6e870e1ea8c0e0fdf93faa8d3cba33d5aec70e6bfbbb9c45af3',
  host: 'ec2-52-30-75-37.eu-west-1.compute.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
