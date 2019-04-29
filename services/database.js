var config = require('../config/database')
var Sequelize = require('sequelize-oracle');

var db = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, config);

module.exports.db = db